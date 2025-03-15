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
      required: false,
      sparse: true, // Index only documents that have this field
      unique: true, // Each phone number must be unique
    },
    password: {
      type: String,
      required: false,
    },
    role: {
      type: String,
      enum: ['student', 'counselor', 'financeAdmin', 'documentAdmin'],
      required: true,
    },
    googleId: {
      type: String,
      sparse: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

// Create compound indexes for common search patterns
userSchema.index({ email: 1, role: 1 }); // For searching users by email and role
userSchema.index({ phone: 1, role: 1 }); // For searching users by phone and role
userSchema.index({ username: 1, role: 1 }); // For searching users by username and role
userSchema.index({ googleId: 1, role: 1 }); // For searching users by googleId and role

// Create text index for name search
userSchema.index({ name: 'text' }); // For text search on name field

const User = mongoose.model('User', userSchema);

module.exports = User;