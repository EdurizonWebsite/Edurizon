const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true }
}, { _id: false });

const staticAttributeSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['countries', 'universities', 'currencies'],
    required: true,
    unique: true,
  },
  items: {
    type: [itemSchema],
    default: [],
  },
}, {
  collection: 'static-attributes',
  timestamps: true,
});

module.exports = mongoose.model('StaticAttribute', staticAttributeSchema);
