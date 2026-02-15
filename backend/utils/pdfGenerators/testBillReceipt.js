const readline = require('readline');
const fs = require('fs');
const path = require('path');
const { generateBillReceiptPDF } = require('./billReceiptPDF');

/**
 * Test script to generate bill receipt PDF with manual input
 * Usage: node backend/utils/pdfGenerators/testBillReceipt.js
 */

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/**
 * Prompt user for input
 */
function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

/**
 * Get number input with default value
 */
function askNumber(question, defaultValue = 0) {
  return new Promise((resolve) => {
    rl.question(`${question} (default: ${defaultValue}): `, (answer) => {
      const num = answer.trim() ? parseFloat(answer) : defaultValue;
      resolve(isNaN(num) ? defaultValue : num);
    });
  });
}

/**
 * Main function to collect data and generate PDF
 */
async function generateTestPDF() {
  console.log('\n=== Bill Receipt PDF Generator - Test Script ===\n');
  console.log('Enter the following information (press Enter to use default values):\n');

  // Student Information
  const studentName = await askQuestion('Student Name (default: John Doe): ') || 'John Doe';
  const fatherName = await askQuestion('Father Name (default: John Doe Sr.): ') || 'John Doe Sr.';
  const programme = await askQuestion('Programme (default: MBBS): ') || 'MBBS';

  // Country and University
  const countryInput = await askQuestion('Country (comma-separated for multiple, default: Russia): ') || 'Russia';
  const countries = countryInput.split(',').map(c => c.trim()).filter(c => c);
  
  const universityInput = await askQuestion('University (comma-separated for multiple, default: Moscow State University): ') || 'Moscow State University';
  const universities = universityInput.split(',').map(u => u.trim()).filter(u => u);

  // Payment Information
  console.log('\n--- Payment Information ---');
  const currency = (await askQuestion('Currency (INR/USD, default: INR): ') || 'INR').toUpperCase();
  const paymentAmount = await askNumber('Payment Amount', 50000);
  const purpose = await askQuestion('Payment Purpose (default: Processing Fee): ') || 'Processing Fee';

  // Finance Details
  console.log('\n--- Finance Details ---');
  const totalProcessingInr = await askNumber('Total Processing Charge (INR)', 100000);
  const totalOtcUsd = await askNumber('Total OTC (USD)', 5000);
  const otcPaid = await askNumber('OTC Already Paid (USD)', 0);
  const pendingProcessingInr = await askNumber('Pending Processing (INR)', 50000);
  const pendingOtcUsd = await askNumber('Pending OTC (USD)', 5000);

  // Create mock student object
  const student = {
    enrolledCountry: countries,
    enrolledUniversity: universities,
    studyDestination: countries[0] || 'Russia',
    intendedCourse: programme
  };

  // Prepare options
  const options = {
    student,
    paymentAmount,
    studentName,
    university: universities[0] || 'Moscow State University',
    currency,
    purpose,
    fatherName,
    programme,
    totalOtcUsd,
    totalProcessingInr,
    otcPaid,
    pendingOtcUsd,
    pendingProcessingInr
  };

  console.log('\n--- Generating PDF ---');
  console.log('Options:', JSON.stringify(options, null, 2));

  // Generate PDF
  const doc = generateBillReceiptPDF(options);

  // Create output directory if it doesn't exist
  const outputDir = path.join(__dirname, '../../test-outputs');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Generate filename with timestamp
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
  const filename = `bill-receipt-${timestamp}.pdf`;
  const filepath = path.join(outputDir, filename);

  // Write PDF to file
  const stream = fs.createWriteStream(filepath);
  doc.pipe(stream);
  doc.end();

  stream.on('finish', () => {
    console.log(`\n✅ PDF generated successfully!`);
    console.log(`📄 File saved at: ${filepath}`);
    console.log(`\nTo open the PDF, run:`);
    console.log(`   - Windows: start ${filepath}`);
    console.log(`   - Mac: open ${filepath}`);
    console.log(`   - Linux: xdg-open ${filepath}`);
    
    // Try to open the PDF automatically
    const { exec } = require('child_process');
    const platform = process.platform;
    let openCommand;
    
    if (platform === 'win32') {
      openCommand = `start "" "${filepath}"`;
    } else if (platform === 'darwin') {
      openCommand = `open "${filepath}"`;
    } else {
      openCommand = `xdg-open "${filepath}"`;
    }
    
    exec(openCommand, (error) => {
      if (error) {
        console.log('\n⚠️  Could not open PDF automatically. Please open it manually.');
      }
    });

    rl.close();
  });

  stream.on('error', (error) => {
    console.error('\n❌ Error writing PDF file:', error);
    rl.close();
    process.exit(1);
  });
}

// Run the script
generateTestPDF().catch((error) => {
  console.error('\n❌ Error:', error);
  rl.close();
  process.exit(1);
});

