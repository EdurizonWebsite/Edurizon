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
 * @param {Array} options.payments - Optional array of payment objects (if not provided, uses current payment)
 * @returns {PDFDocument} - PDF document instance
 */

// Constants
const HEADER_HEIGHT = 100;
const FOOTER_HEIGHT = 160;
const CONTENT_START_Y = 120;
const MARGIN = 40;
const LINE_SPACING = 18;
const SECTION_SPACING = 25;

// Helper function to ensure space before drawing content
function ensureSpace(doc, y, neededHeight, pageHeight, footerHeight) {
  const safeBottom = pageHeight - footerHeight - 20;
  if (y + neededHeight > safeBottom) {
    doc.addPage();
    drawHeader(doc, doc.page.width);
    return CONTENT_START_Y;
  }
  return y;
}

// Calculate payment table height dynamically
function getPaymentTableHeight(doc, payments, rowHeight, headerHeight) {
  return headerHeight + (payments.length * rowHeight);
}

// Draw header image
function drawHeader(doc, pageWidth) {
  const headerImagePath = path.join(__dirname, '../../assets/header.jpg');
  try {
    doc.image(headerImagePath, 0, 0, { width: pageWidth, height: HEADER_HEIGHT });
  } catch (error) {
    console.error('Error loading header image:', error);
    // Fallback to text header if image fails
    doc.fontSize(20)
       .font('Times-Bold')
       .text('EDURIZON', MARGIN, 50, { align: 'center' });
  }
}

// Draw footer image
function drawFooter(doc, pageWidth, pageHeight, yPosition) {
  const footerImagePath = path.join(__dirname, '../../assets/footer.png');
  const footerImageY = pageHeight - FOOTER_HEIGHT;
  
  // Footer text
  const footerY = pageHeight - 60;
  const contentWidth = pageWidth - 2 * MARGIN;
  
  doc.fontSize(8)
     .font('Times-Roman')
     .fillColor('#000000')
     .text('EDURIZON PVT LTD. 111,113,115, 1ST FLOOR, PLOT-6, SEC-12, DWARKA, NEW DELHI-75', MARGIN, footerY, { 
       width: contentWidth,
       align: 'center'
     });
  
  doc.fontSize(8)
     .text('CONTACT DETAILS- 9873381377, 9999222564', MARGIN, footerY + 15, { 
       width: contentWidth,
       align: 'center'
     });

  // Footer image
  if (yPosition < footerImageY - 20) {
    try {
      doc.image(footerImagePath, 0, footerImageY, { width: pageWidth, height: FOOTER_HEIGHT });
    } catch (error) {
      console.error('Error loading footer image:', error);
    }
  } else {
    // Content is too long, add footer on current position
    try {
      doc.image(footerImagePath, 0, yPosition, { width: pageWidth, height: FOOTER_HEIGHT });
    } catch (error) {
      console.error('Error loading footer image:', error);
    }
  }
}

// Draw section title with underline
function drawSectionTitle(doc, text, x, y, width) {
  doc.fontSize(10)
     .font('Times-Bold');
  
  const textHeight = doc.heightOfString(text, { width });
  doc.text(text, x, y, { width });
  
  // Draw underline
  doc.moveTo(x, y + textHeight + 2)
     .lineTo(x + width, y + textHeight + 2)
     .stroke();
  
  return y + textHeight + 8;
}

// Draw label-value pair
function drawLabelValue(doc, label, value, x, y, width) {
  doc.fontSize(9)
     .font('Times-Roman')
     .text(`${label}: ${value}`, x, y, { width });
  
  return y + doc.heightOfString(`${label}: ${value}`, { width }) + 4;
}

// Draw table with borders
function drawTable(doc, config) {
  const { x, y, columns, rows, rowHeight = 25 } = config;
  let currentY = y;
  
  // Draw header
  doc.fontSize(8)
     .font('Times-Bold');
  
  let currentX = x;
  columns.forEach((col, index) => {
    // Draw cell border
    doc.rect(currentX, currentY, col.width, rowHeight)
       .stroke();
    
    // Draw text (centered vertically)
    const textHeight = doc.heightOfString(col.header, { width: col.width - 10 });
    const textY = currentY + (rowHeight - textHeight) / 2;
    doc.text(col.header, currentX + 5, textY, { width: col.width - 10, align: col.align || 'left' });
    
    currentX += col.width;
  });
  
  currentY += rowHeight;
  
  // Draw rows
  doc.fontSize(8)
     .font('Times-Roman');
  
  rows.forEach((row) => {
    currentX = x;
    columns.forEach((col, index) => {
      // Draw cell border
      doc.rect(currentX, currentY, col.width, rowHeight)
         .stroke();
      
      // Draw text (centered vertically)
      const cellValue = row[index] || '';
      const textHeight = doc.heightOfString(cellValue, { width: col.width - 10 });
      const textY = currentY + (rowHeight - textHeight) / 2;
      doc.text(cellValue, currentX + 5, textY, { width: col.width - 10, align: col.align || 'left' });
      
      currentX += col.width;
    });
    currentY += rowHeight;
  });
  
  return currentY;
}

// Format an amount with its currency code
function formatAmount(amount, currency) {
  const code = (currency || 'INR').toUpperCase();
  const num = Number(amount) || 0;
  if (code === 'INR') {
    return `Rs ${num.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }
  return `${code} ${num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

const generateBillReceiptPDF = (options) => {
  const {
    student,
    paymentAmount,
    studentName,
    university,
    currency = 'INR',
    otcCurrency = 'USD',
    processingCurrency = 'INR',
    purpose,
    fatherName,
    programme,
    totalOtcUsd = 0,
    totalProcessingInr = 0,
    otcPaid = 0,
    pendingOtcUsd = 0,
    pendingProcessingInr = 0,
    payments = [{srNo:0},{srNo:1},{srNo:2},{srNo:3},{srNo:4}], // Optional payments array
    description,
    accountDetail='EDURIZON PVT LTD',
    paymentMode="Bank Transfer"
  } = options;

  // Create PDF document
  const doc = new PDFDocument({
    size: 'A4',
    margins: { top: 0, bottom: 0, left: MARGIN, right: MARGIN },
  });
  console.log('payment receipts', payments)
  // PDF Dimensions
  const pageWidth = doc.page.width;
  const pageHeight = doc.page.height;
  const contentWidth = pageWidth - 2 * MARGIN;
  const safeBottom = pageHeight - FOOTER_HEIGHT;

  // Draw header on first page
  drawHeader(doc, pageWidth);

  let yPosition = CONTENT_START_Y;

  // ============================================
  // 1. TITLE SECTION
  // ============================================
  const titleHeight = 30;
  yPosition = ensureSpace(doc, yPosition, titleHeight, pageHeight, FOOTER_HEIGHT);
  
  // "Payment Receipt" - Centered
  doc.fontSize(12)
     .font('Times-Bold')
     .text('Payment Receipt', MARGIN, yPosition, { 
       width: contentWidth, 
       align: 'center' 
     });
  
  // Underline for title
  const titleTextHeight = doc.heightOfString('Payment Receipt', { width: contentWidth });
  doc.moveTo(MARGIN + (contentWidth / 2) - 60, yPosition + titleTextHeight + 2)
     .lineTo(MARGIN + (contentWidth / 2) + 60, yPosition + titleTextHeight + 2)
     .stroke();
  
  // "Registration date" - Right side
  const receiptDate = new Date().toLocaleDateString('en-IN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
  doc.fontSize(9)
     .font('Times-Roman')
     .text(`Registration date: ${receiptDate}`, MARGIN, yPosition, { 
       width: contentWidth, 
       align: 'right' 
     });
  
  yPosition += titleHeight + SECTION_SPACING;

  // ============================================
  // 2. TWO-COLUMN INFORMATION SECTION
  // ============================================
  const colWidth = (contentWidth - 40) / 2;
  const col1Start = MARGIN;
  const col2Start = MARGIN + colWidth + 40;
  
  // Calculate required height for both columns
  const leftColumnHeight = 80; // Approximate height for student info
  const rightColumnHeight = 80; // Approximate height for academic info
  const twoColumnHeight = Math.max(leftColumnHeight, rightColumnHeight);
  
  yPosition = ensureSpace(doc, yPosition, twoColumnHeight, pageHeight, FOOTER_HEIGHT);
  
  const startY = yPosition;
  let leftY = startY;
  let rightY = startY;

  // LEFT COLUMN - Student Information
  leftY = drawSectionTitle(doc, 'Student Information', col1Start, leftY, colWidth);
  
  // Get student data
  const studentEmail = student?.email || 'Not provided';
  const studentPhone = student?.phone || 'Not provided';
  const fatherNameText = fatherName || student?.fatherName || 'Not provided';
  
  leftY = drawLabelValue(doc, 'Student Name', studentName, col1Start, leftY, colWidth);
  leftY = drawLabelValue(doc, 'Father\'s Name', fatherNameText, col1Start, leftY, colWidth);
  leftY = drawLabelValue(doc, 'Email', studentEmail, col1Start, leftY, colWidth);
  // leftY = drawLabelValue(doc, 'Phone', studentPhone, col1Start, leftY, colWidth);

  // RIGHT COLUMN - Academic Information
  rightY = drawSectionTitle(doc, 'Academic Information', col2Start, rightY, colWidth);
  
  // Get academic data
  const countryList = student?.enrolledCountry || [];
  const countryText = countryList.length > 0 
    ? (Array.isArray(countryList) ? countryList.join(', ') : countryList)
    : (student?.studyDestination || 'Not specified');
  
  const universityList = student?.enrolledUniversity || [];
  let universityDisplayText = university || 'Not specified';
  
  if (!university && universityList.length > 0) {
    const universities = Array.isArray(universityList) ? universityList : [universityList];
    universityDisplayText = universities.length === 1 
      ? universities[0] 
      : universities.slice(0, 3).join(', ') + (universities.length > 3 ? ` (+${universities.length - 3} more)` : '');
  }
  
  const programmeText = programme || student?.intendedCourse || 'MBBS';
  const sessionText = '2026'; // Can be made dynamic if needed
  
  rightY = drawLabelValue(doc, 'Programme', programmeText, col2Start, rightY, colWidth);
  rightY = drawLabelValue(doc, 'University', universityDisplayText, col2Start, rightY, colWidth);
  rightY = drawLabelValue(doc, 'Country', countryText, col2Start, rightY, colWidth);
  rightY = drawLabelValue(doc, 'Session', sessionText, col2Start, rightY, colWidth);

  // Move to the bottom of the taller column
  yPosition = Math.max(leftY, rightY) + SECTION_SPACING;

  // ============================================
  // 3. PAYMENT AGREED UPON SECTION
  // ============================================
  const paymentAgreedHeight = 100;
  yPosition = ensureSpace(doc, yPosition, paymentAgreedHeight, pageHeight, FOOTER_HEIGHT);
  
  // Heading
  yPosition = drawSectionTitle(doc, 'Payment Agreed Upon', MARGIN, yPosition, contentWidth);
  
  // Pending amounts already adjusted by the controller before passing in
  const adjustedPendingProcessing = pendingProcessingInr;
  const adjustedPendingOtc = pendingOtcUsd;
  
  // Table columns
  const paymentAgreedColumns = [
    { header: 'Description', width: contentWidth * 0.5, align: 'left' },
    { header: 'Amount', width: contentWidth * 0.25, align: 'right' },
    { header: 'Pending', width: contentWidth * 0.25, align: 'right' }
  ];
  
  // Table rows
  const paymentAgreedRows = [
    [
      `One Time Charge (${otcCurrency.toUpperCase()})`,
      formatAmount(totalOtcUsd, otcCurrency),
      formatAmount(adjustedPendingOtc, otcCurrency),
    ],
    [
      `Processing Charge (${processingCurrency.toUpperCase()})`,
      formatAmount(totalProcessingInr, processingCurrency),
      formatAmount(adjustedPendingProcessing, processingCurrency),
    ],
  ];
  
  yPosition = drawTable(doc, {
    x: MARGIN,
    y: yPosition,
    columns: paymentAgreedColumns,
    rows: paymentAgreedRows,
    rowHeight: 30
  });
  
  yPosition += SECTION_SPACING;

  // ============================================
  // 4. PAYMENT DETAILS TABLE
  // ============================================
  
  // Prepare payments array - use provided payments or create from current payment
  let paymentsArray = payments;
  const paymentAmountFormatted = formatAmount(paymentAmount, currency);
  if (!paymentsArray || !Array.isArray(paymentsArray) || paymentsArray.length === 0) {
    paymentsArray = [{
      srNo: 1,
      date: receiptDate,
      amount: paymentAmountFormatted,
      accountDetails: accountDetail,
      description: description,
      mode: paymentMode
    }];
  } else {
    paymentsArray.push({
      srNo: paymentsArray.length + 1,
      date: receiptDate,
      amount: paymentAmountFormatted,
      accountDetails: accountDetail,
      description: description,
      mode: paymentMode
    });
  }
  
  // Table columns
  const paymentDetailsColumns = [
    { header: 'Sr. No.', width: contentWidth * 0.08, align: 'center' },
    { header: 'Date', width: contentWidth * 0.12, align: 'center' },
    { header: 'Amount', width: contentWidth * 0.15, align: 'right' },
    { header: 'Account Details', width: contentWidth * 0.20, align: 'left' },
    { header: 'Description', width: contentWidth * 0.25, align: 'left' },
    { header: 'Mode', width: contentWidth * 0.20, align: 'left' }
  ];
  
  // Convert payments array to table rows format
  const paymentDetailsRows = paymentsArray.map((payment, index) => {
    return [
      String(payment.srNo || index + 1),
      payment.date || receiptDate,
      payment.amount || '',
      payment.accountDetails || 'EDURIZON PVT LTD',
      payment.description || '',
      payment.mode || 'Bank Transfer'
    ];
  });

  
  // Calculate heights for smart pagination
  const tableHeaderHeight = 25; // Row height for header
  const tableRowHeight = 25; // Row height for data rows
  
  // Set font for accurate height calculation
  doc.fontSize(10).font('Times-Bold');
  const sectionTitleHeight = doc.heightOfString('Payment Details:', { width: contentWidth }) + 8;
  
  // Split payment rows: first 3 on first page, rest on second page
  const firstThreeRows = paymentDetailsRows.slice(0, 6);
  const remainingRows = paymentDetailsRows.slice(6);
  
  // Calculate height for first 3 rows
  const firstTableHeight = getPaymentTableHeight(doc, firstThreeRows, tableRowHeight, tableHeaderHeight);
  const firstTableRequiredHeight = sectionTitleHeight + firstTableHeight + SECTION_SPACING;
  
  // Smart pagination: Check if first table fits on current page
  const remainingHeight = safeBottom - yPosition;
  
  if (firstTableRequiredHeight > remainingHeight) {
    // Move to next page if section doesn't fit
    doc.addPage();
    drawHeader(doc, pageWidth);
    yPosition = CONTENT_START_Y;
  }
  
  // Heading for first page
  yPosition = drawSectionTitle(doc, 'Payment Details:', MARGIN, yPosition, contentWidth);
  
  // Draw first 3 rows on current page
  yPosition = drawTable(doc, {
    x: MARGIN,
    y: yPosition,
    columns: paymentDetailsColumns,
    rows: firstThreeRows,
    rowHeight: tableRowHeight
  });
  
  yPosition += SECTION_SPACING;
  
  // If there are more than 3 rows, draw remaining rows on a new page
  if (remainingRows.length > 0) {
    // Add new page for remaining rows
    doc.addPage();
    drawHeader(doc, pageWidth);
    yPosition = CONTENT_START_Y;
    
    // Heading for second page
    yPosition = drawSectionTitle(doc, 'Payment Details (continued):', MARGIN, yPosition, contentWidth);
    
    // Draw remaining rows
    yPosition = drawTable(doc, {
      x: MARGIN,
      y: yPosition,
      columns: paymentDetailsColumns,
      rows: remainingRows,
      rowHeight: tableRowHeight
    });
    
    yPosition += SECTION_SPACING;
  }

  // ============================================
  // 5. NOTE SECTION
  // ============================================
  const noteHeight = 20;
  yPosition = ensureSpace(doc, yPosition, noteHeight, pageHeight, FOOTER_HEIGHT);
  
  doc.fontSize(9)
     .font('Times-Bold')
     .text('Note: Above payment is Non-refundable', MARGIN, yPosition, { width: contentWidth });
  
  yPosition += noteHeight + SECTION_SPACING;

  // ============================================
  // 6. SIGNATURE AREA
  // ============================================
  // const signatureHeight = 50;
  // yPosition = ensureSpace(doc, yPosition, signatureHeight, pageHeight, FOOTER_HEIGHT);
  
  // ============================================
  // 7. FOOTER
  // ============================================
  drawFooter(doc, pageWidth, pageHeight, yPosition);

  return doc;
};

module.exports = { generateBillReceiptPDF };
