const asyncHandler = require('express-async-handler');
const Meeting = require('../models/meetingModel');
const { v4: uuidv4 } = require('uuid');

// @desc    Create a new meeting request
// @route   POST /api/meetings/create
// @access  Private (Student)
const createMeeting = asyncHandler(async (req, res) => {
  const { universityId, name, email, phone, country, course } = req.body;
  const studentId = req.user._id;

  const meeting = await Meeting.create({
    student: studentId,
    university: universityId,
    studentDetails: { name, email, phone, country, course },
    status: 'Waiting for scheduling',
  });

  res.status(201).json(meeting);
});

// @desc    Get all meeting requests for counselors
// @route   GET /api/meetings
// @access  Private (Counselor)
const getMeetings = asyncHandler(async (req, res) => {
  const meetings = await Meeting.find({
    $or: [
      { status: 'Waiting for scheduling' },
      { status: 'Waiting' },
      { status: 'Join' },
      { status: 'Completed' },
      { status: 'Missed' },
    ],
  }).populate('student university').sort({ createdAt: -1 });

  // Update meeting status based on current time
  const currentTime = new Date();
  meetings.forEach(async (meeting) => {
    if (meeting.status === 'Waiting' && meeting.scheduledTime && new Date(meeting.scheduledTime) <= currentTime) {
      meeting.status = 'Join';
      await meeting.save();
    }
  });

  res.json(meetings);
});

// @desc    Update meeting status and assign counselor
// @route   PUT /api/meetings/:id
// @access  Private (Counselor)
const updateMeetingStatus = asyncHandler(async (req, res) => {
  const meeting = await Meeting.findById(req.params.id);

  if (!meeting) {
    res.status(404);
    throw new Error('Meeting not found');
  }

  if (meeting.counselor && meeting.counselor.toString() !== req.user._id.toString()) {
    res.status(403);
    throw new Error('You are not authorized to update this meeting');
  }

  meeting.counselor = req.user._id;
  meeting.status = req.body.status || meeting.status;
  meeting.scheduledTime = req.body.scheduledTime || meeting.scheduledTime;

  if (meeting.status === 'Join' && !meeting.jitsiUrl) {
    meeting.jitsiUrl = `https://meet.jit.si/${uuidv4()}`;
  }

  await meeting.save();

  res.json(meeting);
});

// @desc    Get meeting status for a university
// @route   GET /api/meetings/status/:universityId
// @access  Private (Student)
const getMeetingStatus = asyncHandler(async (req, res) => {
  const studentId = req.user._id;
  const { universityId } = req.params;

  const meeting = await Meeting.findOne({ student: studentId, university: universityId });

  if (!meeting) {
    return res.status(200).json({ status: 'No meeting found' });
  }

  res.json({ status: meeting.status, meeting });
});

module.exports = { createMeeting, getMeetings, updateMeetingStatus, getMeetingStatus };