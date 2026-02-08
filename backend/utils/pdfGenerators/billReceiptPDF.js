const PDFDocument = require('pdfkit');
const path = require('path');
const { roundCurrency } = require('../financeHelpers');

/**
 * Generate Payment Receipt PDF Document
 * @param {Object} options - PDF generation options
 * @param {Object} options.student - Student document from database
 * @param {Number} options.paymentAmount - Payment amount
 * @param {String} options.studentName - Student name
 * @param {String} options.university - University name
 * @param {String} options.currency - Currency code ('INR' or 'USD')
 * @param {String} options.purpose - Payment purpose
 * @param {String} options.fatherName - Father's name
 * @param {String} options.programme - Programme name
 * @param {Number} options.totalOtcUsd - Total OTC in USD
 * @param {Number} options.totalProcessingInr - Total processing charge in INR
 * @param {Number} options.otcPaid - Amount of OTC already paid
 * @param {Number} options.pendingOtcUsd - Pending OTC balance in USD
 * @param {Number} options.pendingProcessingInr - Pending processing balance in INR
 * @returns {PDFDocument} - PDF document instance
 */
const generateBillReceiptPDF = (options) => {
  const {
    student,
    paymentAmount,
    studentName,
    university,
    currency = 'INR',
    purpose,
    fatherName,
    programme,
    totalOtcUsd = 0,
    totalProcessingInr = 0,
    otcPaid = 0,
    pendingOtcUsd = 0,
    pendingProcessingInr = 0,
  } = options;

  // Create PDF document
  const doc = new PDFDocument({
    size: 'A4',
    margins: { top: 0, bottom: 0, left: 50, right: 50 },
  });

  // PDF Content
  const pageWidth = doc.page.width;
  const pageHeight = doc.page.height;
  const margin = 50;
  const contentWidth = pageWidth - 2 * margin;

  // Header Image
  const headerImagePath = path.join(__dirname, '../../assets/header.jpg');
  try {
    const headerHeight = 120;
    doc.image(headerImagePath, 0, 0, { width: pageWidth, height: headerHeight });
  } catch (error) {
    console.error('Error loading header image:', error);
    // Fallback to text header if image fails
    doc.fontSize(24)
       .font('Times-Bold')
       .text('EDURIZON', margin, 50, { align: 'center' });
  }

  let yPosition = 140;

  // Two Column Layout - Match image design
  const col1Start = margin;
  const col2Start = margin + (contentWidth / 2) + 20;
  const colWidth = (contentWidth / 2) - 20;
  const startY = yPosition;

  // LEFT COLUMN - University Options & Charges
  let leftY = startY;
  
  // Country Section (larger font, above UNIVERSITY OPTIONS)
  doc.fontSize(14)
     .font('Times-Bold')
     .text('COUNTRY', col1Start, leftY);
  
  leftY += 20;
  
  // Get country from student's enrolledCountry (registeredUserModel)
  const countryList = student.enrolledCountry || [];
  const countryText = countryList.length > 0 
    ? (Array.isArray(countryList) ? countryList.join(', ') : countryList)
    : (student.studyDestination || 'Not specified');
  
  doc.fontSize(12)
     .font('Times-Roman')
     .text(countryText, col1Start, leftY, { width: colWidth });
  
  leftY += 25;
  
  // University Options Section
  doc.fontSize(14)
     .font('Times-Bold')
     .text('UNIVERSITY OPTIONS', col1Start, leftY);
  
  leftY += 20;
  
  // Get university from student's enrolledUniversity (registeredUserModel) - list all universities
  const universityList = student.enrolledUniversity || [];
  let universityDisplayText = 'Not specified';
  
  if (university) {
    // If university is provided in request, use it
    universityDisplayText = university;
  } else if (universityList.length > 0) {
    // Use enrolledUniversity list from student data
    const universities = Array.isArray(universityList) ? universityList : [universityList];
    // Display each university on a new line or comma-separated
    if (universities.length === 1) {
      universityDisplayText = universities[0];
    } else {
      // Display first few universities (limit to 3 for space)
      universityDisplayText = universities.slice(0, 3).join(', ');
      if (universities.length > 3) {
        universityDisplayText += ` (+${universities.length - 3} more)`;
      }
    }
  }
  
  doc.fontSize(12)
     .font('Times-Roman')
     .text(universityDisplayText, col1Start, leftY, { width: colWidth });
  
  leftY += 25;
  
  // CURRENT PAYMENT SECTION (Highlighted)
  doc.rect(col1Start - 5, leftY - 5, colWidth + 10, 50)
     .fillColor('#E6F3FF')
     .fill()
     .fillColor('#000000'); // Reset fill color
  
  doc.fontSize(13)
     .font('Times-Bold')
     .fillColor('#0066CC')
     .text('CURRENT PAYMENT', col1Start, leftY);
  
  leftY += 20;
  doc.fontSize(12)
     .font('Times-Bold')
     .fillColor('#000000')
     .text(
       currency === 'USD' 
         ? `USD ${roundCurrency(Number(paymentAmount)).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
         : `Rs ${Number(paymentAmount).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
       col1Start, 
       leftY, 
       { width: colWidth }
     );
  
  leftY += 18;
  doc.fontSize(11)
     .font('Times-Roman')
     .text(
       purpose && purpose.toLowerCase().includes('otc') 
         ? 'One Time Charge (OTC)' 
         : 'Processing Fee',
       col1Start, 
       leftY, 
       { width: colWidth }
     );
  
  leftY += 30;
  
  doc.fontSize(12)
     .font('Times-Bold')
     .text('Processing Charge', col1Start, leftY);
  
  leftY += 18;
  // Show total processing charge
  doc.fontSize(11)
     .font('Times-Roman')
     .text(`Total: Rs ${totalProcessingInr.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`, col1Start, leftY, { width: colWidth });
  
  // Show OTC information if applicable
  if (totalOtcUsd > 0) {
    leftY += 20;
    doc.fontSize(12)
       .font('Times-Bold')
       .text('One Time Charge (OTC)', col1Start, leftY);
    
    leftY += 18;
    doc.fontSize(11)
       .font('Times-Roman')
       .text(`Total: USD ${roundCurrency(totalOtcUsd).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`, col1Start, leftY, { width: colWidth });
    
    // Show paid amount (excluding current payment if it's OTC)
    const previousOtcPaid = currency === 'USD' && purpose && (purpose.toLowerCase().includes('otc') || purpose.toLowerCase().includes('one time'))
      ? Math.max(0, otcPaid - Number(paymentAmount))
      : otcPaid;
    
    
  }
  
  leftY += 25;
  doc.fontSize(12)
     .font('Times-Bold')
     .text('Pending', col1Start, leftY);
  
  leftY += 18;
  
  // Calculate pending amounts accounting for current payment
  let adjustedPendingProcessing = pendingProcessingInr;
  let adjustedPendingOtc = pendingOtcUsd;
  
  // If current payment is processing fee, subtract it from pending
  if (currency === 'INR' && purpose && purpose.toLowerCase().includes('processing')) {
    adjustedPendingProcessing = Math.max(0, pendingProcessingInr - Number(paymentAmount));
  }
  
  // If current payment is OTC, subtract it from pending
  if (currency === 'USD' && purpose && (purpose.toLowerCase().includes('otc') || purpose.toLowerCase().includes('one time'))) {
    adjustedPendingOtc = Math.max(0, pendingOtcUsd - Number(paymentAmount));
  }
  
  // Show pending processing charge
  if(adjustedPendingProcessing>0){
    doc.fontSize(11)
     .font('Times-Roman')
     .text(`Processing: Rs ${adjustedPendingProcessing.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`, col1Start, leftY, { width: colWidth });
  
  }else if(totalProcessingInr>0){
    doc.fontSize(11)
     .font('Times-Roman')
     .text(`Processing: Rs 0.00 (Fully Paid)`, col1Start, leftY, { width: colWidth });
    
  }
  
  // Show pending OTC if applicable
  if (adjustedPendingOtc > 0) {
    leftY += 15;
    doc.fontSize(10)
       .font('Times-Roman')
       .text(`OTC: USD ${roundCurrency(adjustedPendingOtc).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`, col1Start, leftY, { width: colWidth });
  } else if (totalOtcUsd > 0) {
    leftY += 15;
    doc.fontSize(10)
       .font('Times-Roman')
       .text(`OTC: USD 0.00 (Fully Paid)`, col1Start, leftY, { width: colWidth });
  }

  // RIGHT COLUMN - Student Details & Payment Acknowledgment
  let rightY = startY;
  
  doc.fontSize(12)
     .font('Times-Bold')
     .text('STUDENT DETAILS', col2Start, rightY);
  
  rightY += 20;
  doc.fontSize(11)
     .font('Times-Roman')
     .text(`NAME - ${studentName}`, col2Start, rightY, { width: colWidth });
  
  rightY += 18;
  
  // Get father's name and programme from options or student data
  const fatherNameText = fatherName || 'Not provided';
  const programmeText = programme || student.intendedCourse || 'MBBS';
  
  doc.text(`FATHER NAME - ${fatherNameText}`, col2Start, rightY, { width: colWidth });
  
  rightY += 18;
  const receiptDate = new Date().toLocaleDateString('en-IN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
  doc.text(`DATE - ${receiptDate}`, col2Start, rightY, { width: colWidth });
  
  rightY += 18;
  doc.text(`PROGRAMME - ${programmeText} 2026`, col2Start, rightY, { width: colWidth });
  
  rightY += 30;
  
  // Payment Acknowledgment Text
  const paymentAmountInWords = currency === 'USD' 
    ? `$${roundCurrency(Number(paymentAmount)).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
    : `Rs.${Number(paymentAmount).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  
  // Determine payment purpose for acknowledgment
  const isOtcPayment = currency === 'USD' && purpose && (purpose.toLowerCase().includes('otc') || purpose.toLowerCase().includes('one time'));
  const paymentPurpose = isOtcPayment ? 'One Time Charge (OTC)' : 'Processing fees';
  
  doc.fontSize(11)
     .font('Times-Roman')
     .text(`We acknowledged receipt of ${paymentAmountInWords} only in online mode, on account of registration fees for the admission.`, col2Start, rightY, { 
       width: colWidth,
       lineGap: 4
     });
  
  rightY += 35;
  
  // Non-refundable Note
  doc.fontSize(11)
     .font('Times-Bold')
     .text('NB-It may be noted that this amount is non-refundable', col2Start, rightY, { width: colWidth });

  // Use the maximum Y position from both columns
  yPosition = Math.max(leftY, rightY) + 30;

  // Footer Section - Company Address and Contact (always use footer.png)
  const footerY = pageHeight - 60;
  
  doc.fontSize(9)
     .font('Times-Roman')
     .fillColor('#000000')
     .text('EDURIZON PVT LTD. 111,113,115, 1ST FLOOR, PLOT-6, SEC-12, DWARKA, NEW DELHI-75', margin, footerY, { 
       width: contentWidth,
       align: 'center'
     });
  
  doc.fontSize(9)
     .text('CONTACT DETAILS- 9873381377, 9999222564', margin, footerY + 15, { 
       width: contentWidth,
       align: 'center'
     });

  // Add footer image (always use footer.png)
  const footerImagePath = path.join(__dirname, '../../assets/footer.png');
  const footerImageHeight = 150;
  const footerImageY = pageHeight - footerImageHeight;
  
  if (yPosition < footerImageY - 20) {
    try {
      doc.image(footerImagePath, 0, footerImageY, { width: pageWidth, height: footerImageHeight });
    } catch (error) {
      console.error('Error loading footer image:', error);
      // Footer text already added above, so just log the error
    }
  } else {
    // Content is too long, add footer on current position
    try {
      doc.image(footerImagePath, 0, yPosition, { width: pageWidth, height: footerImageHeight });
    } catch (error) {
      console.error('Error loading footer image:', error);
      // Footer text already added above, so just log the error
    }
  }

  return doc;
};

module.exports = { generateBillReceiptPDF };

