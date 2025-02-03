const mongoose = require('mongoose');

const universitySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const University = mongoose.model('University', universitySchema);

module.exports = University;