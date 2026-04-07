const mongoose = require('mongoose');
const Leads = require('../models/leadsModel');

/**
 * Adds missing city/state fields to existing leads without overwriting values.
 * Safe to run multiple times.
 */
const migrateLeadCityState = async () => {
  const mongoUri ='mongodb://viraj_mern:viraj_mern123@ac-dujfq2x-shard-00-00.evlwc4r.mongodb.net:27017,ac-dujfq2x-shard-00-01.evlwc4r.mongodb.net:27017,ac-dujfq2x-shard-00-02.evlwc4r.mongodb.net:27017/?ssl=true&replicaSet=atlas-f6k66e-shard-0&authSource=admin&appName=gofood'

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
