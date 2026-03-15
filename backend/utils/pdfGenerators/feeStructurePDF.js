const PDFDocument = require('pdfkit');
const path = require('path');

/**
 * Generate Fee Structure PDF Document
 * @param {Object} options - PDF generation options
 * @param {Object} options.student - Student document from database
 * @param {String} options.fatherName - Father's name
 * @param {String} options.countryName - Country name(s) - comma separated
 * @param {Array|String} options.universities - University name(s)
 * @param {String} options.programme - Programme name
 * @param {Number} options.oneTimeCharge - One time charge in USD
 * @param {Number} options.processingCharge - Processing charge in INR
 * @param {Boolean} options.ticketsIncluded - Whether flight tickets are included
 * @param {Boolean} options.visasIncluded - Whether visa charges are included
 * @param {Boolean} options.firstYearPackageIncluded - Whether first year package is included
 * @returns {PDFDocument} - PDF document instance
 */
const generateFeeStructurePDF = (options) => {
  const {
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

  // Title
  doc.fontSize(18)
     .font('Times-Bold')
     .text('FEE STRUCTURE', margin, yPosition, { align: 'center' });

  yPosition += 40;

  // Date - Above Student Information
  const generationDate = new Date().toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  doc.fontSize(10)
     .font('Times-Roman')
     .text(`Date: ${generationDate}`, margin, yPosition, { align: 'right' });

  yPosition += 25;

  // Two Column Layout for Student and Academic Information
  const col1Start = margin;
  const col2Start = margin + (contentWidth / 2) + 20;
  const colWidth = (contentWidth / 2) - 20;

  // Student Information Section (Left Column)
  doc.fontSize(14)
     .font('Times-Bold')
     .text('Student Information', col1Start, yPosition);
  
  let leftY = yPosition + 25;
  doc.fontSize(11)
     .font('Times-Roman')
     .text(`Student Name: ${student.name}`, col1Start, leftY, { width: colWidth });
  
  leftY += 18;
  doc.text(`Father's Name: ${fatherName}`, col1Start, leftY, { width: colWidth });
  
  leftY += 18;
  doc.text(`Email: ${student.email || 'N/A'}`, col1Start, leftY, { width: colWidth });
  
  leftY += 18;
//   doc.text(`Phone: ${student.phone || 'N/A'}`, col1Start, leftY, { width: colWidth });
  
  leftY += 18;
  // Handle multiple countries (comma separated)
  const countriesList = countryName ? countryName.split(',').map(c => c.trim()).filter(c => c) : [];
  const countriesText = countriesList.length > 0 ? countriesList.join(', ') : countryName;
  doc.text(`Country: ${countriesText}`, col1Start, leftY, { width: colWidth });

  // Academic Information Section (Right Column)
  doc.fontSize(14)
     .font('Times-Bold')
     .text('Academic Information', col2Start, yPosition);
  
  let rightY = yPosition + 25;
  doc.fontSize(11)
     .font('Times-Roman')
     .text(`Programme: ${programme}`, col2Start, rightY, { width: colWidth });
  
  rightY += 18;
  if (universities && universities.length > 0) {
    const universitiesList = Array.isArray(universities) ? universities : [universities];
    doc.text('Universities:', col2Start, rightY, { width: colWidth });
    rightY += 15;
    universitiesList.forEach((uni, index) => {
      if (index < 3) { // Limit to 3 universities
        doc.text(`${index + 1}. ${uni}`, col2Start, rightY, { width: colWidth });
        rightY += 15;
      }
    });
  }

  // Use the maximum Y position from both columns
  yPosition = Math.max(leftY, rightY) + 30;

  // Fee Structure Section
  doc.fontSize(14)
     .font('Times-Bold')
     .text('Fee Structure', margin, yPosition);
  
  yPosition += 30;

  // Fee Details Table
  const tableTop = yPosition;
  const itemHeight = 25;
  const col1 = margin;
  const col2 = margin + contentWidth - 150;

  // Table Header
  doc.fontSize(11)
     .font('Times-Bold')
     .text('Description', col1, tableTop)
     .text('Amount', col2, tableTop, { align: 'right' });

  yPosition = tableTop + itemHeight;
  doc.moveTo(margin, yPosition - 5)
     .lineTo(pageWidth - margin, yPosition - 5)
     .stroke();

  // One Time Charge
  doc.fontSize(11)
     .font('Times-Roman')
     .text('One Time Charge (USD)', col1, yPosition)
     .text(`$${Number(oneTimeCharge).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`, col2, yPosition, { align: 'right' });
  
  yPosition += itemHeight;

  // Processing Charge
  doc.text('Processing Charge (INR)', col1, yPosition)
     .text(`INR ${Number(processingCharge).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`, col2, yPosition, { align: 'right' });
  
  yPosition += itemHeight;

  // Additional Services
  if (ticketsIncluded) {
    doc.text('Flight Tickets (Included)', col1, yPosition)
       .text('Included', col2, yPosition, { align: 'right' });
    yPosition += itemHeight;
  }

  if (visasIncluded) {
    doc.text('Visa Charges (Included)', col1, yPosition)
       .text('Included', col2, yPosition, { align: 'right' });
    yPosition += itemHeight;
  }

  if (firstYearPackageIncluded) {
    doc.text('First Year Package (Included)', col1, yPosition)
       .text('Included', col2, yPosition, { align: 'right' });
    yPosition += itemHeight;
  }

  yPosition += 30;

  // Important Notes Section
  doc.fontSize(12)
     .font('Times-Bold')
     .text('Please Note:', margin, yPosition);
  
  yPosition += 20;
  doc.fontSize(10)
     .font('Times-Roman')
     .text('1. NEET qualification is mandatory.', margin + 10, yPosition, { width: contentWidth - 10 });
  
  yPosition += 15;
  const note2Text = '2. Final admission shall be strictly subject to the successful clearance of the entrance examination/interview, as and when conducted.';
  const note2Height = doc.heightOfString(note2Text, { width: contentWidth - 10 });
  doc.text(note2Text, margin + 10, yPosition, { width: contentWidth - 10 });
  
  yPosition += note2Height + 10;
  doc.text('3. All the amount is non-refundable.', margin + 10, yPosition, { width: contentWidth - 10 });

  yPosition += 40;

  // Footer Image - Position at bottom of page (always use footer.png)
  const footerImagePath = path.join(__dirname, '../../assets/footer.png');
  const footerHeight = 150;
  const footerY = pageHeight - footerHeight;
  
  // Only add footer if there's enough space, otherwise it will be on next page
  if (yPosition < footerY - 20) {
    try {
      doc.image(footerImagePath, 0, footerY, { width: pageWidth, height: footerHeight });
    } catch (error) {
      console.error('Error loading footer image:', error);
      // Fallback to text footer if image fails
      doc.fontSize(10)
         .font('Times-Roman')
         .text('This is a system-generated fee structure document.', margin, footerY + 30, { align: 'center' });
    }
  } else {
    // Content is too long, add footer on current position
    try {
      doc.image(footerImagePath, 0, yPosition, { width: pageWidth, height: footerHeight });
    } catch (error) {
      console.error('Error loading footer image:', error);
      // Fallback to text footer if image fails
      doc.fontSize(10)
         .font('Times-Roman')
         .text('This is a system-generated fee structure document.', margin, yPosition + 30, { align: 'center' });
    }
  }

  return doc;
};

module.exports = { generateFeeStructurePDF };

