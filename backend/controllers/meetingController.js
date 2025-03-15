const { google } = require('googleapis');
const { OAuth2 } = google.auth;
const asyncHandler = require('express-async-handler');
const Meeting = require('../models/meetingModel');
const { v4: uuidv4 } = require('uuid');

const oauth2Client = new OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI
);

// Function to create a Google Meet link
const createGoogleMeetLink = async (meeting) => {
  const calendar = google.calendar({ version: 'v3', auth: oauth2Client });
  const event = {
    summary: 'Counseling Meeting',
    description: 'A counseling meeting with a student.',
    start: {
      dateTime: meeting.scheduledTime,
      timeZone: 'America/Los_Angeles',
    },
    end: {
      dateTime: new Date(new Date(meeting.scheduledTime).getTime() + 60 * 60 * 1000), // 1 hour meeting
      timeZone: 'America/Los_Angeles',
    },
    conferenceData: {
      createRequest: {
        requestId: uuidv4(),
        conferenceSolutionKey: {
          type: 'hangoutsMeet',
        },
      },
    },
  };

  const response = await calendar.events.insert({
    calendarId: 'primary',
    resource: event,
    conferenceDataVersion: 1,
  });

  return response.data.hangoutLink;
};

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

  if (meeting.status === 'Join' && !meeting.googleMeetUrl) {
    meeting.googleMeetUrl = await createGoogleMeetLink(meeting);
  }

  await meeting.save();

  res.json(meeting);
});

module.exports = { updateMeetingStatus };