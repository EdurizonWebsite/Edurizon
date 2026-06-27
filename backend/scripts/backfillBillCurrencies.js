/**
 * One-time backfill: set currency on all FinanceBill documents that have none.
 *   - purpose === 'One Time Charge'  →  currency = 'USD'
 *   - purpose === 'Processing Fee'   →  currency = 'INR'
 *
 * Usage: node scripts/backfillBillCurrencies.js
 */

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '..', '.env') });

const FinanceBill = require('../model/FinanceBill');

async function backfill() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Connected to MongoDB');

  const otcResult = await FinanceBill.updateMany(
    { purpose: 'One Time Charge', currency: null },
    { $set: { currency: 'USD' } }
  );
  console.log(`[One Time Charge]  updated ${otcResult.modifiedCount} bills → currency = 'USD'`);

  const processingResult = await FinanceBill.updateMany(
    { purpose: 'Processing Fee', currency: null },
    { $set: { currency: 'INR' } }
  );
  console.log(`[Processing Fee]   updated ${processingResult.modifiedCount} bills → currency = 'INR'`);

  const remaining = await FinanceBill.countDocuments({ currency: null });
  if (remaining > 0) {
    console.warn(`\nWARNING: ${remaining} bill(s) still have no currency — unknown purpose value?`);
    const samples = await FinanceBill.find({ currency: null }).select('_id purpose').limit(5).lean();
    samples.forEach(b => console.warn(`  _id=${b._id}  purpose="${b.purpose}"`));
  } else {
    console.log('\nAll bills now have a currency.');
  }

  await mongoose.disconnect();
  console.log('Done. Disconnected from MongoDB.');
}

backfill().catch(err => {
  console.error('Backfill failed:', err);
  process.exit(1);
});
