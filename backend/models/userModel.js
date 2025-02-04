const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: false, // Make phone optional
    },
    password: {
      type: String,
      required: false, // Make password optional
    },
    role: {
      type: String,
      enum: ['student', 'counselor', 'financeAdmin', 'documentAdmin'],
      required: true,
    },
    googleId: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);

module.exports = User;