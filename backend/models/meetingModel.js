const mongoose = require('mongoose');

const meetingSchema = mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    university: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'University',
    },
    studentDetails: {
      name: { type: String, required: true },
      email: { type: String, required: true },
      phone: { type: String, required: true },
      country: { type: String, required: true },
      course: { type: String, required: true },
    },
    status: {
      type: String,
      enum: ['Waiting for scheduling', 'Waiting', 'Join', 'Completed', 'Missed'],
      default: 'Waiting for scheduling',
    },
    scheduledTime: {
      type: Date,
    },
    googleMeetUrl: {
      type: String,
    },
    counselor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

const Meeting = mongoose.model('Meeting', meetingSchema);

module.exports = Meeting;