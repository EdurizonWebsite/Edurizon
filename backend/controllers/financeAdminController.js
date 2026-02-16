const { RegisteredStudent } = require('../models/registeredUserModel');
const { uploadToCloudinary } = require('../utils/cloudinary');
const { getFinanceTrackingInfo, roundCurrency, getBillsData } = require('../utils/financeHelpers');
const FinanceBill = require('../model/FinanceBill');
const { generateFeeStructurePDF } = require('../utils/pdfGenerators/feeStructurePDF');
const { generateBillReceiptPDF } = require('../utils/pdfGenerators/billReceiptPDF');

const feeStructure = async (req, res) => {
  try {
    const {
      studentId,
      fatherName,
      countryName,
      universities,
      programme,
      oneTimeCharge,
      processingCharge,
      ticketsIncluded,
      visasIncluded,
      firstYearPackageIncluded,
    } = req.body;

    // Validate required fields
    if (!studentId || !fatherName || !countryName || !programme || 
        oneTimeCharge === undefined || processingCharge === undefined) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: studentId, fatherName, countryName, programme, oneTimeCharge, processingCharge are required',
      });
    }

    // Fetch student details
    const student = await RegisteredStudent.findById(studentId);
    if (!student) {
      return res.status(404).json({
        success: false,
        message: 'Student not found',
      });
    }

    // Generate PDF using the modular PDF generator
    const doc = generateFeeStructurePDF({
      student,
      fatherName,
      countryName,
      universities,
      programme,
      oneTimeCharge,
      processingCharge,
      ticketsIncluded,
      visasIncluded,
      firstYearPackageIncluded,
    });

    // Create a buffer to store PDF
    const chunks = [];
    doc.on('data', (chunk) => chunks.push(chunk));
    doc.on('end', async () => {
      try {
        const pdfBuffer = Buffer.concat(chunks);

        // Upload PDF to Cloudinary
        const cloudinaryResult = await uploadToCloudinary(
          pdfBuffer,
          'edurizon/fee-structures',
        );

        console.log('PDF uploaded to Cloudinary:', cloudinaryResult.secure_url);
        console.log('Resource type:', cloudinaryResult.resource_type);
        console.log('Format:', cloudinaryResult.format);
        console.log('Public ID:', cloudinaryResult.public_id);

        // Update student's financeInfo with structured data (compatible with registeredUserModel)
        if (!student.financeInfo) {
          student.financeInfo = {};
        }
        
        // Update fee structure fields in financeInfo (using registeredUserModel fields)
        student.financeInfo.feeStructureLink = cloudinaryResult.secure_url;
        student.financeInfo.feeStructureGeneratedDate = new Date();
        student.financeInfo.feeStructureAgreed = false;
        // Use oneTimeCharge and processingCharge fields from registeredUserModel
        student.financeInfo.oneTimeCharge = roundCurrency(Number(oneTimeCharge) || 0);
        student.financeInfo.processingCharge = Math.round((Number(processingCharge) || 0) * 100) / 100;
        student.financeInfo.oneTimeChargePaid = 0; // OTC is not paid initially
        // Keep legacy fields for backward compatibility
        student.financeInfo.totalOtcUsd = roundCurrency(Number(oneTimeCharge) || 0);
        student.financeInfo.totalProcessingInr = Math.round((Number(processingCharge) || 0) * 100) / 100;
        student.financeInfo.inclusions = {
          visa: visasIncluded || false,
          flightTickets: ticketsIncluded || false,
          firstYearPackage: firstYearPackageIncluded || false,
        };
        student.fatherName=fatherName;
        
        // Initialize bills array if it doesn't exist
        if (!student.financeInfo.bills) {
          student.financeInfo.bills = [];
        }

        // Legacy support: also update top-level feeStructure field if it exists
        if (student.schema.paths.feeStructure) {
          student.feeStructure = cloudinaryResult.secure_url;
        }
        if (student.schema.paths.feeStructureGeneratedDate) {
          student.feeStructureGeneratedDate = new Date();
        }
        if (student.schema.paths.feeStructureAgreed) {
          student.feeStructureAgreed = false;
        }
        console.log('student data' , student)
        await student.save();

        // Send notification to student about fee structure generation
        const mongoose = require('mongoose');
        const notificationPayload = {
          _id: new mongoose.Types.ObjectId(),
          message: `Your fee structure has been generated. Please review and agree to the terms.`,
          sentAt: new Date(),
          isRead: false,
          senderId: req.adminUser?._id?.toString() || 'system',
        };
        
        await RegisteredStudent.findByIdAndUpdate(
          studentId,
          { $push: { notifications: notificationPayload } },
          { new: false }
        );

        res.status(200).json({
          success: true,
          message: 'Fee structure generated and uploaded successfully',
          data: {
            feeStructureUrl: cloudinaryResult.secure_url,
            studentId: student._id,
            studentName: student.name,
          },
        });
      } catch (error) {
        console.error('Error uploading PDF to Cloudinary:', error);
        res.status(500).json({
          success: false,
          message: 'Failed to upload fee structure PDF',
          error: error.message,
        });
      }
    });

    // Finalize PDF
    doc.end();
  } catch (error) {
    console.error('Error generating fee structure:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to generate fee structure',
      error: error.message,
    });
  }
};

const billStructure = async (req, res) => {
  try {
    const {
      studentId,
      paymentAmount,
      paymentNumber,
      studentName,
      university,
      country,
      status,
      currency = 'INR',
      purpose,
      fatherName,
      programme,
      financeInfo,
      description,
      accountDetail,
      paymentMode
    } = req.body;
    console.log('response getting from client side',req.body)
    // Validate required fields
    if (!studentId || !paymentAmount || !studentName) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: studentId, paymentAmount, and studentName are required',
      });
    }

    // Fetch student details
    const student = await RegisteredStudent.findById(studentId);
    if (!student) {
      return res.status(404).json({
        success: false,
        message: 'Student not found',
      });
    }

    // Get finance tracking info using the helper function
    const financeTracking = await getFinanceTrackingInfo(studentId);
    let pendingProcessingInr=financeTracking.pendingProcessingInr
    let pendingOtc=financeTracking.pendingOtcUsd
    if(currency==='USD'){
      pendingOtc=pendingOtc-paymentAmount
    }else{
      pendingProcessingInr=pendingProcessingInr-paymentAmount
    }

    // Determine if this is an OTC payment
    const isOtcPayment = currency === 'USD' && purpose && (purpose.toLowerCase().includes('otc') || purpose.toLowerCase().includes('one time'));
    
    // For pending calculation, we'll pass the values and let PDF generator adjust for current payment
    // The otcPaid value should be the amount BEFORE this current payment
    const otcPaidBeforeCurrent = isOtcPayment 
      ? Math.max(0, financeTracking.otcPaid - Number(paymentAmount))
      : financeTracking.otcPaid;

    // Fetch bill documents from database using bill IDs
    const billsData = await getBillsData(financeInfo?.bills || []);
    
    // Transform bill documents into format expected by PDF generator
    const transformedPayments = billsData.map((bill, index) => {
      // Format date
      const billDate = bill.issueDate 
        ? new Date(bill.issueDate).toLocaleDateString('en-IN', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
          })
        : new Date().toLocaleDateString('en-IN', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
          });
      
      // Determine currency and format amount
      const isOtcBill = bill.purpose === 'One Time Charge';
      const billCurrency = isOtcBill ? 'USD' : 'INR';
      const billAmount = bill.amountPaid || 0;
      const formattedAmount = billCurrency === 'USD'
        ? `USD ${roundCurrency(billAmount).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
        : `Rs ${billAmount.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
      
      return {
        srNo: index + 1,
        date: billDate,
        amount: formattedAmount,
        accountDetails: bill.accountName || accountDetail || 'EDURIZON PVT LTD',
        description: bill.description || bill.purpose || 'Payment',
        mode: bill.paymentMode || 'Online Mode'
      };
    });

    // Generate PDF using the modular PDF generator
    const doc = generateBillReceiptPDF({
      student,
      paymentAmount,
      studentName,
      university,
      currency,
      purpose,
      fatherName,
      programme,
      totalOtcUsd: financeTracking.totalOtcUsd,
      totalProcessingInr: financeTracking.totalProcessingInr,
      otcPaid: financeTracking.otcPaid, // Total OTC paid (including this payment)
      pendingOtcUsd: pendingOtc, // PDF will adjust for current payment
      pendingProcessingInr: pendingProcessingInr, // PDF will adjust for current payment
      payments: transformedPayments,
      accountDetail: accountDetail || 'EDURIZON PVT LTD',
      paymentMode:paymentMode,
      description:description
    });
    console.log('Doc that is generated',doc)

    // Create a buffer to store PDF
    const chunks = [];
    doc.on('data', (chunk) => chunks.push(chunk));
    doc.on('end', async () => {
      try {
        const pdfBuffer = Buffer.concat(chunks);
        console.log('PDF Buffer',pdfBuffer)
        // Upload PDF to Cloudinary
        const cloudinaryResult = await uploadToCloudinary(
          pdfBuffer,
          'edurizon/payment-receipts',
        );

        console.log('PDF uploaded to Cloudinary:', cloudinaryResult.secure_url);
        console.log('Resource type:', cloudinaryResult.resource_type);
        console.log('Format:', cloudinaryResult.format);
        console.log('Public ID:', cloudinaryResult.public_id);

        res.status(200).json({
          success: true,
          message: 'Payment acknowledgement receipt generated and uploaded successfully',
          url: cloudinaryResult.secure_url,
          data: {
            receiptUrl: cloudinaryResult.secure_url,
            studentId: student._id,
            studentName: studentName,
          },
        });
      } catch (error) {
        console.error('Error uploading PDF to Cloudinary:', error);
        res.status(500).json({
          success: false,
          message: 'Failed to upload payment receipt PDF',
          error: error.message,
        });
      }
    });

    // Finalize PDF
    doc.end();
  } catch (error) {
    console.error('Error generating payment receipt:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to generate payment receipt',
      error: error.message,
    });
  }
};

const updateStudentEnrollment = async (req, res) => {
  try {
    const { studentId, countryName, universities } = req.body;

    // Validate required fields
    if (!studentId) {
      return res.status(400).json({
        success: false,
        message: 'studentId is required',
      });
    }

    // Fetch student details
    const student = await RegisteredStudent.findById(studentId);

    if (!student) {
      return res.status(404).json({
        success: false,
        message: 'Student not found',
      });
    }

    // Handle multiple countries (comma separated)
    const countriesList = countryName
      ? countryName.split(',').map(c => c.trim()).filter(Boolean)
      : [];

    // Handle universities (string or array)
    const universitiesList = universities
      ? (Array.isArray(universities)
          ? universities.map(u => u.trim())
          : [universities.trim()]
        ).filter(Boolean)
      : [];

    // Ensure arrays exist
    if (!Array.isArray(student.enrolledCountry)) {
      student.enrolledCountry = [];
    }

    if (!Array.isArray(student.enrolledUniversity)) {
      student.enrolledUniversity = [];
    }

    // Add values WITHOUT duplicates
    countriesList.forEach(country => {
      if (!student.enrolledCountry.includes(country)) {
        student.enrolledCountry.push(country);
      }
    });

    universitiesList.forEach(university => {
      if (!student.enrolledUniversity.includes(university)) {
        student.enrolledUniversity.push(university);
      }
    });

    console.log('previous student',student)

    // Save document
    await student.save();

    return res.status(200).json({
      success: true,
      message: 'Student enrollment updated successfully',
      data: {
        studentId: student._id,
        enrolledCountry: student.enrolledCountry,
        enrolledUniversity: student.enrolledUniversity,
      },
    });
  } catch (error) {
    console.error('Error updating student enrollment:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update student enrollment',
      error: error.message,
    });
  }
};

const updateFeeStructureAgreement = async (req, res) => {
  try {
    const student = await RegisteredStudent.findById(req.user._id);

    if (!student) {
      return res.status(404).json({
        success: false,
        message: 'Student not found',
      });
    }

    // Check if fee structure exists (check both legacy and new structure)
    const hasFeeStructure = student.feeStructure || (student.financeInfo && student.financeInfo.feeStructureLink);
    
    if (!hasFeeStructure) {
      return res.status(400).json({
        success: false,
        message: 'Fee structure not found for this student',
      });
    }

    // Update agreement status in financeInfo (compatible with registeredUserModel)
    if (!student.financeInfo) {
      student.financeInfo = {};
    }
    student.financeInfo.feeStructureAgreed = true;
    
    // Legacy support: also update top-level field if it exists
    if (student.schema.paths.feeStructureAgreed) {
      student.feeStructureAgreed = true;
    }
    
    await student.save();

    // Send notification to finance admins using the admin notification API
    try {
      const { AdminUser } = require('../models/AdminUser');
      const financeAdmins = await AdminUser.find({
        role: { $in: ['finance', 'finance-admin', 'super-admin'] },
        active: true
      }).select('_id email name');

      if (financeAdmins.length > 0) {
        // Use the existing admin notification system
        // For now, we'll use the send-notifications endpoint pattern
        const axios = require('axios');
        const baseUrl = process.env.BASE_URL || 'http://localhost:5000';
        
        const notificationMessage = `${student.name} (${student.email}) has agreed to the fee structure terms and conditions.`;
        
        // If there's a direct way to send admin notifications, use it here
        // Otherwise, log it for now
        console.log('📧 Notification for finance admins:', notificationMessage);
        console.log('Finance admins to notify:', financeAdmins.map(a => ({ id: a._id, email: a.email })));
        
        // TODO: Implement admin notification system if needed
        // For now, this will be logged and can be viewed in admin dashboard
      }
    } catch (notifError) {
      console.error('Error sending notification to finance admins:', notifError);
      // Don't fail the request if notification fails
    }

    res.status(200).json({
      success: true,
      message: 'Fee structure agreement updated successfully',
      data: {
        studentId: student._id,
        feeStructureAgreed: student.feeStructureAgreed,
        feeStructureGeneratedDate: student.feeStructureGeneratedDate,
      },
    });
  } catch (error) {
    console.error('Error updating fee structure agreement:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update fee structure agreement',
      error: error.message,
    });
  }
};

module.exports = { feeStructure, billStructure, updateStudentEnrollment, updateFeeStructureAgreement };
