/**
 * One-time backfill: set otcCurrency and processingCurrency on all
 * RegisteredStudent documents whose financeInfo is missing those fields.
 *
 *   otcCurrency        → 'USD'
 *   processingCurrency → 'INR'
 *
 * Safe to re-run — only touches documents where the field is null/undefined.
 *
 * Usage: node scripts/backfillStudentCurrencies.js
 */

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '..', '.env') });

const { RegisteredStudent } = require('../models/registeredUserModel');

async function backfill() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Connected to MongoDB');

  const otcResult = await RegisteredStudent.updateMany(
    { 'financeInfo.otcCurrency': { $in: [null, undefined, ''] } },
    { $set: { 'financeInfo.otcCurrency': 'USD' } }
  );
  console.log(`[otcCurrency]        updated ${otcResult.modifiedCount} students → 'USD'`);

  const procResult = await RegisteredStudent.updateMany(
    { 'financeInfo.processingCurrency': { $in: [null, undefined, ''] } },
    { $set: { 'financeInfo.processingCurrency': 'INR' } }
  );
  console.log(`[processingCurrency] updated ${procResult.modifiedCount} students → 'INR'`);

  const remaining = await RegisteredStudent.countDocuments({
    $or: [
      { 'financeInfo.otcCurrency': { $in: [null, undefined, ''] } },
      { 'financeInfo.processingCurrency': { $in: [null, undefined, ''] } },
    ],
  });

  if (remaining > 0) {
    console.warn(`\nWARNING: ${remaining} student(s) still missing one or both currency fields.`);
    const samples = await RegisteredStudent
      .find({
        $or: [
          { 'financeInfo.otcCurrency': { $in: [null, undefined, ''] } },
          { 'financeInfo.processingCurrency': { $in: [null, undefined, ''] } },
        ],
      })
      .select('_id name financeInfo.otcCurrency financeInfo.processingCurrency')
      .limit(5)
      .lean();
    samples.forEach(s =>
      console.warn(`  _id=${s._id}  name="${s.name}"  otc="${s.financeInfo?.otcCurrency}"  proc="${s.financeInfo?.processingCurrency}"`)
    );
  } else {
    console.log('\nAll students now have otcCurrency and processingCurrency set.');
  }

  await mongoose.disconnect();
  console.log('Done. Disconnected from MongoDB.');
}

backfill().catch(err => {
  console.error('Backfill failed:', err);
  process.exit(1);
});
