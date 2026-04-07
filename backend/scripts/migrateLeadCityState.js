const mongoose = require('mongoose');
const Leads = require('../models/leadsModel');

/**
 * Adds missing city/state fields to existing leads without overwriting values.
 * Safe to run multiple times.
 */
const migrateLeadCityState = async () => {
  const mongoUri =' process.env.MONGODB_URI || process.env.MONGODB_URI;'

  if (!mongoUri) {
    throw new Error('MONGO_URI or MONGODB_URI is required');
  }

  await mongoose.connect(mongoUri);

  try {
    const result = await Leads.updateMany(
      {
        $or: [{ city: { $exists: false } }, { state: { $exists: false } }]
      },
      {
        $set: { city: '', state: '' }
      }
    );

    console.log('Lead city/state migration completed');
    console.log(`Matched: ${result.matchedCount ?? result.n}`);
    console.log(`Modified: ${result.modifiedCount ?? result.nModified}`);
  } finally {
    await mongoose.disconnect();
  }
};

migrateLeadCityState()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error('Lead city/state migration failed:', error.message);
    process.exit(1);
  });
