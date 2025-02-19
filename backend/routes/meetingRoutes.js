const express = require('express');
const { getMeetings, updateMeetingStatus, createMeeting, getMeetingStatus } = require('../controllers/meetingController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.route('/').get(protect, getMeetings);
router.route('/create').post(protect, createMeeting);
router.route('/status/:universityId').get(protect, getMeetingStatus); // Add this line
router.route('/:id').put(protect, updateMeetingStatus);

module.exports = router;