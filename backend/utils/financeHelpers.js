const { RegisteredStudent } = require('../models/registeredUserModel');
const FinanceBill = require('../model/FinanceBill');
const mongoose = require('mongoose');

/**
 * Calculate remaining processing charge balance for a student
 * Uses financeInfo.processingCharge from registeredUserModel
 * @param {String} studentId - MongoDB ObjectId of the student
 * @returns {Promise<Number>} - Remaining processing charge balance in INR
 */
const calculateRemainingProcessingBalance = async (studentId) => {
  try {
    const student = await RegisteredStudent.findById(studentId);
    
    if (!student || !student.financeInfo) {
      return 0;
    }

    // Use processingCharge from financeInfo (registeredUserModel)
    const totalProcessingInr = student.financeInfo.processingCharge || student.financeInfo.totalProcessingInr || 0;
    
    // Sum all processing fee bills (purpose: 'Processing Fee') that are paid
    const processingBills = await FinanceBill.find({
      studentId: studentId,
      purpose: 'Processing Fee'
    });

    const totalPaid = processingBills.reduce((sum, bill) => {
      return sum + (bill.amountPaid || 0);
    }, 0);

    const remaining = Math.max(0, totalProcessingInr - totalPaid);
    return Math.round(remaining * 100) / 100; // Round to 2 decimal places
  } catch (error) {
    console.error('Error calculating remaining processing balance:', error);
    return 0;
  }
};

/**
 * Calculate remaining OTC (One Time Charge) balance for a student
 * Uses financeInfo.oneTimeCharge and financeInfo.oneTimeChargePaid from registeredUserModel
 * @param {String} studentId - MongoDB ObjectId of the student
 * @returns {Promise<Number>} - Remaining OTC balance in USD
 */
const calculateRemainingOtcBalance = async (studentId) => {
  try {
    const student = await RegisteredStudent.findById(studentId);
    
    if (!student || !student.financeInfo) {
      return 0;
    }

    const totalOtc = student.financeInfo.oneTimeCharge || student.financeInfo.totalOtcUsd || 0;
    const otcPaid = student.financeInfo.oneTimeChargePaid || 0;

    const remaining = Math.max(0, totalOtc - otcPaid);
    return roundCurrency(remaining); // Round to 2 decimal places for USD
  } catch (error) {
    console.error('Error calculating remaining OTC balance:', error);
    return 0;
  }
};

/**
 * Get all finance tracking info for a student
 * @param {String} studentId - MongoDB ObjectId of the student
 * @returns {Promise<Object>} - Object containing all finance tracking information
 */
const getFinanceTrackingInfo = async (studentId) => {
  try {
    const student = await RegisteredStudent.findById(studentId);
    
    if (!student || !student.financeInfo) {
      return {
        totalOtcUsd: 0,
        totalProcessingInr: 0,
        otcPaid: 0,
        pendingOtcUsd: 0,
        pendingProcessingInr: 0,
      };
    }

    const totalOtcUsd = student.financeInfo.oneTimeCharge || student.financeInfo.totalOtcUsd || 0;
    const totalProcessingInr = student.financeInfo.processingCharge || student.financeInfo.totalProcessingInr || 0;
    const otcPaid = student.financeInfo.oneTimeChargePaid || 0;

    // Calculate pending amounts
    const pendingOtcUsd = Math.max(0, totalOtcUsd - otcPaid);
    
    // Calculate pending processing from bills
    const processingBills = await FinanceBill.find({
      studentId: studentId,
      purpose: 'Processing Fee'
    });
    const processingPaid = processingBills.reduce((sum, bill) => sum + (bill.amountPaid || 0), 0);
    const pendingProcessingInr = Math.max(0, totalProcessingInr - processingPaid);

    return {
      totalOtcUsd: roundCurrency(totalOtcUsd),
      totalProcessingInr: Math.round(totalProcessingInr * 100) / 100,
      otcPaid: roundCurrency(otcPaid),
      pendingOtcUsd: roundCurrency(pendingOtcUsd),
      pendingProcessingInr: Math.round(pendingProcessingInr * 100) / 100,
      isOtcPaid: pendingOtcUsd <= 0,
    };
  } catch (error) {
    console.error('Error getting finance tracking info:', error);
    return {
      totalOtcUsd: 0,
      totalProcessingInr: 0,
      otcPaid: 0,
      pendingOtcUsd: 0,
      pendingProcessingInr: 0,
      isOtcPaid: false,
    };
  }
};

/**
 * Round currency amount to 2 decimal places (for USD)
 * @param {Number} amount - Amount to round
 * @returns {Number} - Rounded amount
 */
const roundCurrency = (amount) => {
  return Math.round(amount * 100) / 100;
};

/**
 * Fetch bill documents from database using an array of bill IDs
 * @param {Array<String>} billIds - Array of MongoDB ObjectIds (as strings or ObjectIds)
 * @returns {Promise<Array>} - Array of bill documents from database, or empty array if invalid input
 */
const getBillsData = async (billIds) => {
  try {
    // Return empty array if input is invalid
    if (!billIds || !Array.isArray(billIds) || billIds.length === 0) {
      return [];
    }

    // Filter and validate ObjectIds
    const validIds = billIds.filter(id => {
      // Check if it's a valid MongoDB ObjectId
      if (typeof id === 'string') {
        return mongoose.Types.ObjectId.isValid(id);
      }
      // If it's already an ObjectId instance, it's valid
      return id instanceof mongoose.Types.ObjectId;
    });

    // Return empty array if no valid IDs found
    if (validIds.length === 0) {
      return [];
    }

    // Convert all IDs to ObjectId instances for consistent querying
    const objectIds = validIds.map(id => {
      if (typeof id === 'string') {
        return new mongoose.Types.ObjectId(id);
      }
      return id;
    });

    // Query bills using $in operator with lean() for performance
    const bills = await FinanceBill.find({
      _id: { $in: objectIds }
    })
    .lean()
    .sort({ issueDate: -1 }); // Sort by issue date descending (newest first)

    return bills;
  } catch (error) {
    console.error('Error fetching bills data:', error);
    // Return empty array on error to prevent breaking the calling code
    return [];
  }
};

module.exports = {
  calculateRemainingProcessingBalance,
  calculateRemainingOtcBalance,
  getFinanceTrackingInfo,
  roundCurrency,
  getBillsData
};


