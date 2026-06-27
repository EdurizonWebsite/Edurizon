const express = require('express');
const FinanceBill = require('../model/FinanceBill');
const { RegisteredStudent } = require('../models/registeredUserModel');
const { protectAdminRoute, restrictTo } = require('../middleware/adminAuth');
const { feeStructure, billStructure, updateStudentEnrollment, updateFeeStructureAgreement } = require('../controllers/financeAdminController');

const router = express.Router();

// Allow both dedicated finance admins and super admins to access finance routes
// Existing finance admin users use the "finance" role in the AdminUser model.
const requireFinanceAdmin = [protectAdminRoute, restrictTo('finance', 'finance-admin', 'super-admin')];

// Helper to determine bill status after payment updates
const resolveBillStatus = (bill) => {
  if (bill.status === 'Cancelled') {
    return 'Cancelled';
  }

  if (bill.amountPaid >= bill.amountDue) {
    return 'Paid';
  }

  if (bill.amountPaid > 0) {
    return 'Partial Payment';
  }

  if (bill.dueDate && bill.dueDate < new Date()) {
    return 'Overdue';
  }

  return 'Pending';
};

// Route 1: Create/Generate New Bill
router.post('/bills', ...requireFinanceAdmin, async (req, res) => {
  try {
    const {
      studentId,
      description,
      amountDue,
      amountPaid = 0,
      newBill,
      studentName,
      url,
      purpose,
      paymentMode,
      accountName,
      currency,
      // financeInfo,
      // fatherName,
    } = req.body;

    if (!studentId || !description || amountDue === undefined || !studentName) {
      return res.status(400).json({
        success: false,
        message: 'studentId, studentName, description, and amountDue are required',
      });
    }

    const issuedBy = req.adminUser?._id || req.user?.id;
    if (!issuedBy) {
      return res.status(401).json({
        success: false,
        message: 'Unable to determine issuing admin user',
      });
    }

    // Map purpose to enum values if needed
    let mappedPurpose = 'Processing Fee'; // default
    if (purpose) {
      const purposeLower = purpose.toLowerCase();
      if (purposeLower.includes('one time') || purposeLower.includes('otc')) {
        mappedPurpose = 'One Time Charge';
      } else if (purposeLower.includes('processing')) {
        mappedPurpose = 'Processing Fee';
      } else {
        // Try to infer from the purpose string
        mappedPurpose = purposeLower.includes('charge') ? 'One Time Charge' : 'Processing Fee';
      }
    }

    const bill = await FinanceBill.create({
      studentId,
      studentName,
      description,
      amountDue,
      amountPaid: amountPaid || 0,
      purpose: mappedPurpose,
      issuedBy,
      paymentMode,
      accountName,
      currency: currency || null,
      url: url || null,
    });

    // Update student's financeInfo to track payments
    const student = await RegisteredStudent.findById(studentId);
    if (student && student.financeInfo) {
      // Initialize bills array if it doesn't exist
      if (!student.financeInfo.bills) {
        student.financeInfo.bills = [];
      }
      // Push only the bill ObjectId (as per schema: bills is an array of ObjectIds referencing FinanceBill)
      student.financeInfo.bills.push(bill._id);
      
      // Track OTC payments in oneTimeChargePaid (only for USD/OTC payments)
      // Note: For processing fees, we calculate from bills, so no need to update a separate field
      if (mappedPurpose === 'One Time Charge' && amountPaid > 0) {
        const currentOtcPaid = student.financeInfo.oneTimeChargePaid || 0;
        student.financeInfo.oneTimeChargePaid = Math.min(
          (currentOtcPaid + amountPaid),
          (student.financeInfo.oneTimeCharge || student.financeInfo.totalOtcUsd || 0)
        );
      }
      
      student.markModified('financeInfo.bills');
      student.markModified('financeInfo.oneTimeChargePaid');
      await student.save();
    } else {
      // Legacy support - update feesInfo
      if (newBill) {
        await RegisteredStudent.findByIdAndUpdate(studentId, {
          $push: { feesInfo: newBill }
        });
      }
    }

    res.status(201).json({
      success: true,
      data: bill,
    });
  } catch (error) {
    console.error('Error creating finance bill:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create finance bill',
    });
  }
});

// Route 2: Get All Bills for Finance Admin
router.get('/bills/all', ...requireFinanceAdmin, async (_req, res) => {
  try {
    const bills = await FinanceBill.find()
      .populate({ path: 'studentId', select: 'name email phone' })
      .populate({ path: 'issuedBy', select: 'name email role' })
      .sort({ issueDate: -1 });

    // Add calculated status to each bill
    const billsWithStatus = bills.map(bill => {
      const outstanding = (bill.amountDue || 0) - (bill.amountPaid || 0);
      let status = 'Pending';
      if (outstanding <= 0) {
        status = 'Paid';
      } else if (bill.amountPaid > 0) {
        status = 'Partial Payment';
      }
      return {
        ...bill.toObject(),
        status,
        outstanding: Math.max(0, outstanding),
      };
    });

    res.json({
      success: true,
      data: billsWithStatus,
    });
  } catch (error) {
    console.error('Error fetching finance bills:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch finance bills',
    });
  }
});

// Route 2b: Paid summary aggregated by purpose + currency (for dashboard cards)
router.get('/bills/paid-summary', ...requireFinanceAdmin, async (_req, res) => {
  try {
    const raw = await FinanceBill.aggregate([
      // Normalise purpose: unwind handles both string storage and legacy array storage
      { $addFields: { purposeNorm: { $cond: { if: { $isArray: '$purpose' }, then: { $arrayElemAt: ['$purpose', 0] }, else: '$purpose' } } } },
      { $match: { amountPaid: { $gt: 0 } } },
      {
        $group: {
          _id: { purpose: '$purposeNorm', currency: { $ifNull: ['$currency', 'UNKNOWN'] } },
          totalPaid: { $sum: '$amountPaid' },
        },
      },
    ]);

    // Shape into { otc: { USD: 1000 }, processing: { INR: 50000 } }
    const otc = {};
    const processing = {};
    raw.forEach(({ _id, totalPaid }) => {
      const purpose = String(_id.purpose || '').trim();
      const currency = String(_id.currency || '').toUpperCase();
      if (purpose === 'One Time Charge') otc[currency] = (otc[currency] || 0) + totalPaid;
      else if (purpose === 'Processing Fee') processing[currency] = (processing[currency] || 0) + totalPaid;
    });

    res.json({ success: true, data: { otc, processing } });
  } catch (error) {
    console.error('Error fetching paid summary:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch paid summary' });
  }
});

// Route 3: Get Pending Bills List
router.get('/bills/pending', ...requireFinanceAdmin, async (_req, res) => {
  try {
    // Fetch all bills and filter pending ones based on amountDue and amountPaid
    const allBills = await FinanceBill.find()
      .populate({ path: 'studentId', select: 'name email phone' })
      .populate({ path: 'issuedBy', select: 'name email role' })
      .sort({ issueDate: -1 });

    // Filter bills that are not fully paid
    const pendingBills = allBills.filter(bill => {
      const outstanding = (bill.amountDue || 0) - (bill.amountPaid || 0);
      return outstanding > 0;
    });

    // Add calculated status to each bill
    const billsWithStatus = pendingBills.map(bill => {
      const outstanding = (bill.amountDue || 0) - (bill.amountPaid || 0);
      let status = 'Pending';
      if (bill.amountPaid > 0 && outstanding > 0) {
        status = 'Partial Payment';
      }
      // Note: Overdue calculation would require a dueDate field, which doesn't exist in the model
      return {
        ...bill.toObject(),
        status,
        outstanding,
      };
    });

    res.json({
      success: true,
      data: billsWithStatus,
    });
  } catch (error) {
    console.error('Error fetching pending bills:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch pending bills',
    });
  }
});

// Route 4: Get Bills by Student
router.get('/bills/student/:studentId', ...requireFinanceAdmin, async (req, res) => {
  try {
    const { studentId } = req.params;
    if (!studentId) {
      return res.status(400).json({
        success: false,
        message: 'studentId param is required',
      });
    }

    const bills = await FinanceBill.find({ studentId })
      .populate({ path: 'issuedBy', select: 'name email role' })
      .sort({ issueDate: -1 });

    // Add calculated status to each bill
    const billsWithStatus = bills.map(bill => {
      const outstanding = (bill.amountDue || 0) - (bill.amountPaid || 0);
      let status = 'Pending';
      if (outstanding <= 0) {
        status = 'Paid';
      } else if (bill.amountPaid > 0) {
        status = 'Partial Payment';
      }
      return {
        ...bill.toObject(),
        status,
        outstanding: Math.max(0, outstanding),
      };
    });

    res.json({
      success: true,
      data: billsWithStatus,
    });
  } catch (error) {
    console.error('Error fetching bills for student:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch student bills',
    });
  }
});

// Route 5: Record Payment
router.patch('/bills/:billId/payment', ...requireFinanceAdmin, async (req, res) => {
  try {
    const { billId } = req.params;
    const { amount, method } = req.body;

    if (!billId) {
      return res.status(400).json({
        success: false,
        message: 'billId param is required',
      });
    }

    if (amount === undefined || amount <= 0) {
      return res.status(400).json({
        success: false,
        message: 'Payment amount must be greater than zero',
      });
    }

    const bill = await FinanceBill.findById(billId);
    if (!bill) {
      return res.status(404).json({
        success: false,
        message: 'Finance bill not found',
      });
    }

    const previousAmountPaid = bill.amountPaid || 0;
    bill.amountPaid = (bill.amountPaid || 0) + amount;
    const paymentIncrease = bill.amountPaid - previousAmountPaid;

    await bill.save();

    // Update student's financeInfo.oneTimeChargePaid if this is an OTC payment
    if (bill.purpose === 'One Time Charge') {
      const student = await RegisteredStudent.findById(bill.studentId);
      if (student && student.financeInfo) {
        const currentOtcPaid = student.financeInfo.oneTimeChargePaid || 0;
        const totalOtc = student.financeInfo.oneTimeCharge || student.financeInfo.totalOtcUsd || 0;
        
        // Update OTC paid amount (ensure it doesn't exceed total)
        student.financeInfo.oneTimeChargePaid = Math.min(
          (currentOtcPaid + paymentIncrease),
          totalOtc
        );
        
        student.markModified('financeInfo.oneTimeChargePaid');
        await student.save();
      }
    }

    // Calculate status for response
    const outstanding = (bill.amountDue || 0) - (bill.amountPaid || 0);
    let status = 'Pending';
    if (outstanding <= 0) {
      status = 'Paid';
    } else if (bill.amountPaid > 0) {
      status = 'Partial Payment';
    }

    res.json({
      success: true,
      data: {
        ...bill.toObject(),
        status,
        outstanding: Math.max(0, outstanding),
      },
    });
  } catch (error) {
    console.error('Error recording payment:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to record payment',
    });
  }
});

// Route 6: Get List of All Students
router.get('/students/all', ...requireFinanceAdmin, async (_req, res) => {
  try {
    const students = await RegisteredStudent.find({}).sort({ name: 1 });

    res.json({
      success: true,
      data: students,
    });
  } catch (error) {
    console.error('Error fetching students:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch students',
    });
  }
});

router.patch('/update-student-receipt-status', ...requireFinanceAdmin, async (req, res) => {
  try {
    const { studentId, oldUrl, newBill } = req.body;
    
    const student = await RegisteredStudent.findById(studentId);
    if (!student) {
      return res.status(404).json({
        success: false,
        message: 'Student not found',
      });
    }
    
    console.log('before update', student.feesInfo);
    student.feesInfo.forEach(fee => {
      if (fee.url === oldUrl) {
        fee.url = newBill.url;
        fee.status = newBill.status;
        fee.description = fee.description;
      }
    });
    student.markModified('feesInfo'); // 🚀 KEY FIX
    await student.save();

    console.log('after update', student.feesInfo);
    console.log('new bill', newBill);
    console.log('old url', oldUrl);
    
    const newStudent = await RegisteredStudent.findById(studentId);
    console.log('new student', newStudent.feesInfo);
    res.status(200).json({
      success: true,
      message: 'Student receipt status updated successfully',
      data: student,
    });
  } catch (error) {
    console.error('Error updating student:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update student',
    });
  }
});

router.put('/bills/feeStructure', ...requireFinanceAdmin, feeStructure);

// Route for generating payment acknowledgement receipt (bill)
router.post('/bills/generate-receipt', ...requireFinanceAdmin, billStructure);

// Route for updating student enrollment (countries and universities)
router.put('/students/enrollment', ...requireFinanceAdmin, updateStudentEnrollment);

// Route 7: Delete Bill
router.delete('/bills/:billId', ...requireFinanceAdmin, async (req, res) => {
  try {
    const { billId } = req.params;

    if (!billId) {
      return res.status(400).json({
        success: false,
        message: 'billId param is required',
      });
    }

    const bill = await FinanceBill.findById(billId);
    if (!bill) {
      return res.status(404).json({
        success: false,
        message: 'Finance bill not found',
      });
    }

    const studentId = bill.studentId;

    // Delete the bill document
    await bill.deleteOne();

    // Remove bill reference from student's financeInfo.bills and adjust oneTimeChargePaid if needed
    if (studentId) {
      const student = await RegisteredStudent.findById(studentId);
      if (student && student.financeInfo) {
        // Remove bill id from bills array
        if (Array.isArray(student.financeInfo.bills)) {
          student.financeInfo.bills = student.financeInfo.bills.filter(
            (id) => id.toString() !== String(billId),
          );
          student.markModified('financeInfo.bills');
        }

        // Recompute oneTimeChargePaid from remaining OTC bills to keep data consistent
        const otcBills = await FinanceBill.find({
          studentId,
          purpose: 'One Time Charge',
        });

        const totalOtcPaidFromBills = otcBills.reduce(
          (sum, b) => sum + (b.amountPaid || 0),
          0,
        );

        const totalOtc =
          student.financeInfo.oneTimeCharge ||
          student.financeInfo.totalOtcUsd ||
          0;

        student.financeInfo.oneTimeChargePaid = Math.min(
          totalOtcPaidFromBills,
          totalOtc,
        );
        student.markModified('financeInfo.oneTimeChargePaid');

        await student.save();
      }
    }

    return res.json({
      success: true,
      message: 'Finance bill deleted successfully',
    });
  } catch (error) {
    console.error('Error deleting finance bill:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to delete finance bill',
    });
  }
});

module.exports = router;


