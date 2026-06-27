/**
 * Run once to seed the static-attributes collection.
 * Usage: node scripts/seedStaticAttributes.js
 */

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '..', '.env') });

const StaticAttribute = require('../models/staticAttributeModel');

const COUNTRIES = [
  'Russia',
  'China',
  'Georgia',
  'Kazakhstan',
  'Kyrgyzstan',
  'Nepal',
  'Tajikistan',
  'Ukraine',
  'Uzbekistan',
  'Germany',
  'Australia',
  'United Kingdom',
  'United States',
  'Canada',
  'Other',
];

const UNIVERSITIES = [
  // Russia
  'Kazan Federal University',
  'Bashkir State Medical University',
  'Orenburg State Medical University',
  'Petrozavodsk State University',
  'Immanuel Kant Baltic Federal University',
  'Krasnoyarsk State Medical University',
  'National Research Nuclear University, MEPHI',
  'North Western State Medical University',
  'Northern State Medical University',
  'Tambov State University',
  'Ulyanovsk State University',
  'Ural State Medical University',
  'Crimea Federal University',
  'Perm State Medical University',
  // China
  'Zhejiang University',
  'Nanjing Medical University',
  'Shandong University',
  'China Medical University',
  'Xian Jiaotong University',
  'Xiamen University',
  'Southeast University',
  'Kunming Medical University',
  'Wenzhou Medical University',
  'Qingdao University',
  'Xinjiang Medical University',
  // United States
  'MIT',
  'Stanford',
  'Harvard',
  'Caltech',
  'UC Berkeley',
  'Princeton',
  'Yale',
  'Columbia',
  'University of Chicago',
  'University of Pennsylvania',
  // Previously used in forms
  'BAU International University',
  'David Tvildiani Medical University',
  'Central Asian International Medical University',
];

const CURRENCIES = [];

const SEED = [
  { type: 'countries',    items: COUNTRIES },
  { type: 'universities', items: UNIVERSITIES },
  { type: 'currencies',   items: CURRENCIES },
];

async function seed() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Connected to MongoDB');

  for (const { type, items } of SEED) {
    const existing = await StaticAttribute.findOne({ type });

    if (existing) {
      console.log(`[${type}] Document already exists — skipping (${existing.items.length} items).`);
      console.log(`  To re-seed, delete the document first: db['static-attributes'].deleteOne({ type: '${type}' })`);
      continue;
    }

    await StaticAttribute.create({
      type,
      items: items.map(name => ({ name })),
    });

    console.log(`[${type}] Seeded ${items.length} items.`);
  }

  await mongoose.disconnect();
  console.log('\nDone. Disconnected from MongoDB.');
}

seed().catch(err => {
  console.error('Seed failed:', err);
  process.exit(1);
});
