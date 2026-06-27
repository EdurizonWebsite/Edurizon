const express = require('express');
const StaticAttribute = require('../models/staticAttributeModel');
const { protectAdminRoute, restrictTo } = require('../middleware/adminAuth');

const router = express.Router();

const counsellorRoles = ['counsellor', 'counsellorAdmin', 'super-admin'];
const financeRoles = ['finance', 'finance-admin', 'super-admin'];
const anyAdmin = [...new Set([...counsellorRoles, ...financeRoles])];

const requireAnyAdmin = [protectAdminRoute, restrictTo(...anyAdmin)];
const requireCounsellorAdmin = [protectAdminRoute, restrictTo(...counsellorRoles)];
const requireFinanceAdmin = [protectAdminRoute, restrictTo(...financeRoles)];

const DEFAULT_COUNTRIES = [
  'Russia', 'China', 'Georgia', 'Kazakhstan', 'Kyrgyzstan', 'Nepal',
  'Tajikistan', 'Ukraine', 'Uzbekistan', 'Germany', 'Australia',
  'United Kingdom', 'United States', 'Canada', 'Other',
];

const DEFAULT_UNIVERSITIES = [
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

const SEED_DATA = {
  countries: DEFAULT_COUNTRIES,
  universities: DEFAULT_UNIVERSITIES,
  currencies: [],
};

// Seed a document with defaults if it doesn't exist yet
async function ensureDocument(type) {
  const existing = await StaticAttribute.findOne({ type });
  if (!existing) {
    const defaultItems = (SEED_DATA[type] || []).map(name => ({ name }));
    await StaticAttribute.create({ type, items: defaultItems });
  }
}

// GET /api/static-attributes/:type — fetch items for a type
router.get('/:type', ...requireAnyAdmin, async (req, res) => {
  const { type } = req.params;
  if (!['countries', 'universities', 'currencies'].includes(type)) {
    return res.status(400).json({ success: false, message: 'Invalid type' });
  }
  try {
    await ensureDocument(type);
    const doc = await StaticAttribute.findOne({ type });
    return res.json({ success: true, items: doc.items.map(i => i.name) });
  } catch (err) {
    console.error(`Error fetching ${type}:`, err);
    return res.status(500).json({ success: false, message: `Failed to fetch ${type}` });
  }
});

// POST /api/static-attributes/countries — add a country
router.post('/countries', ...requireCounsellorAdmin, async (req, res) => {
  const { name } = req.body;
  if (!name || !name.trim()) {
    return res.status(400).json({ success: false, message: 'Name is required' });
  }
  try {
    await ensureDocument('countries');
    const doc = await StaticAttribute.findOne({ type: 'countries' });
    const exists = doc.items.some(i => i.name.toLowerCase() === name.trim().toLowerCase());
    if (exists) {
      return res.status(409).json({ success: false, message: 'Country already exists' });
    }
    doc.items.push({ name: name.trim() });
    await doc.save();
    return res.json({ success: true, items: doc.items.map(i => i.name) });
  } catch (err) {
    console.error('Error adding country:', err);
    return res.status(500).json({ success: false, message: 'Failed to add country' });
  }
});

// DELETE /api/static-attributes/countries/:name — remove a country
router.delete('/countries/:name', ...requireCounsellorAdmin, async (req, res) => {
  const { name } = req.params;
  try {
    const doc = await StaticAttribute.findOne({ type: 'countries' });
    if (!doc) return res.status(404).json({ success: false, message: 'Countries not found' });
    doc.items = doc.items.filter(i => i.name !== decodeURIComponent(name));
    await doc.save();
    return res.json({ success: true, items: doc.items.map(i => i.name) });
  } catch (err) {
    console.error('Error removing country:', err);
    return res.status(500).json({ success: false, message: 'Failed to remove country' });
  }
});

// POST /api/static-attributes/universities — add a university
router.post('/universities', ...requireCounsellorAdmin, async (req, res) => {
  const { name } = req.body;
  if (!name || !name.trim()) {
    return res.status(400).json({ success: false, message: 'Name is required' });
  }
  try {
    await ensureDocument('universities');
    const doc = await StaticAttribute.findOne({ type: 'universities' });
    const exists = doc.items.some(i => i.name.toLowerCase() === name.trim().toLowerCase());
    if (exists) {
      return res.status(409).json({ success: false, message: 'University already exists' });
    }
    doc.items.push({ name: name.trim() });
    await doc.save();
    return res.json({ success: true, items: doc.items.map(i => i.name) });
  } catch (err) {
    console.error('Error adding university:', err);
    return res.status(500).json({ success: false, message: 'Failed to add university' });
  }
});

// DELETE /api/static-attributes/universities/:name — remove a university
router.delete('/universities/:name', ...requireCounsellorAdmin, async (req, res) => {
  const { name } = req.params;
  try {
    const doc = await StaticAttribute.findOne({ type: 'universities' });
    if (!doc) return res.status(404).json({ success: false, message: 'Universities not found' });
    doc.items = doc.items.filter(i => i.name !== decodeURIComponent(name));
    await doc.save();
    return res.json({ success: true, items: doc.items.map(i => i.name) });
  } catch (err) {
    console.error('Error removing university:', err);
    return res.status(500).json({ success: false, message: 'Failed to remove university' });
  }
});

// POST /api/static-attributes/currencies — add a currency
router.post('/currencies', ...requireFinanceAdmin, async (req, res) => {
  const { name } = req.body;
  if (!name || !name.trim()) {
    return res.status(400).json({ success: false, message: 'Name is required' });
  }
  try {
    await ensureDocument('currencies');
    const doc = await StaticAttribute.findOne({ type: 'currencies' });
    const exists = doc.items.some(i => i.name.toLowerCase() === name.trim().toLowerCase());
    if (exists) {
      return res.status(409).json({ success: false, message: 'Currency already exists' });
    }
    doc.items.push({ name: name.trim() });
    await doc.save();
    return res.json({ success: true, items: doc.items.map(i => i.name) });
  } catch (err) {
    console.error('Error adding currency:', err);
    return res.status(500).json({ success: false, message: 'Failed to add currency' });
  }
});

// DELETE /api/static-attributes/currencies/:name — remove a currency
router.delete('/currencies/:name', ...requireFinanceAdmin, async (req, res) => {
  const { name } = req.params;
  try {
    const doc = await StaticAttribute.findOne({ type: 'currencies' });
    if (!doc) return res.status(404).json({ success: false, message: 'Currencies not found' });
    doc.items = doc.items.filter(i => i.name !== decodeURIComponent(name));
    await doc.save();
    return res.json({ success: true, items: doc.items.map(i => i.name) });
  } catch (err) {
    console.error('Error removing currency:', err);
    return res.status(500).json({ success: false, message: 'Failed to remove currency' });
  }
});

module.exports = router;
