const express = require('express');
const mongoose = require('mongoose');
const adminAuthController = require('../controllers/adminAuthController');
const adminUserController = require('../controllers/adminUserController');
const { protectAdminRoute, restrictTo, isSuperAdmin, isCounsellorAdmin } = require('../middleware/adminAuth');
const {getAllCounsellors} = require('../controllers/adminCounsellorAdminController');
const { RegisteredStudent } = require('../models/registeredUserModel');
const {
  scheduleMeeting,
  getAdminMeetings,
  getUserMeetings,
  getMeetingById,
  updateMeeting,
  deleteMeeting,
  cleanupOldMeetings
} = require('../controllers/adminMeetingController');
const { getChatHistory, markMessagesAsRead, getUserChatHistory, markUserMessagesAsRead, deleteMessage } = require('../controllers/chatController');
const router = express.Router();

// Public routes
router.post('/login', adminAuthController.login);
router.post('/forgot-password', adminAuthController.forgotPassword);
router.patch('/reset-password/:token', adminAuthController.resetPassword);
router.get('/validate-token', protectAdminRoute, adminAuthController.validateToken);


// backend route
router.post("/impersonate/:id",adminAuthController.impersonate);

// Counsellor Admin Routes
router.get('/getAllcounsellors', getAllCounsellors);
  
// Protected routes
router.use(protectAdminRoute);

// Get current logged-in admin (profile with latest data)
router.get('/me', adminAuthController.getCurrentAdmin);

// User management routes (Super Admin only)
router.get('/users', isSuperAdmin, adminUserController.getAllUsers);
router.patch('/users/:userId/toggle-access', isSuperAdmin, adminUserController.toggleAccess);
router.delete('/users/:userId', isSuperAdmin, adminUserController.removeUser);

// Admin user routes
router.post('/register', isSuperAdmin, adminAuthController.register);
router.post('/register-counsellor', isCounsellorAdmin, adminAuthController.register);
router.patch('/update-password', adminAuthController.updatePassword);
router.get('/roles', adminAuthController.getRoles);

// Digital Team Routes
router.patch('/addVideoData/:id',adminAuthController.addVideoData)
router.patch('/updateVideoData/:id', adminAuthController.updateVideoData);
router.delete('/deleteVideoData/:id', adminAuthController.deleteVideoData);
router.patch('/updateVideoField/:id', adminAuthController.updateVideoField);
router.get('/getAllDigitalVideos', adminAuthController.getAllDigitalVideos);

// Meeting / shared admin listing routes
router.get('/users/all', adminAuthController.getAllAdminUsers);
router.post('/schedule-meeting', scheduleMeeting);
router.get('/meetings', getAdminMeetings);
router.get('/meetings/user/:id', getUserMeetings);
router.get('/meetings/:id', getMeetingById);
router.put('/meetings/:id', updateMeeting);
router.delete('/meetings/:id', deleteMeeting);
router.post('/meetings/cleanup', cleanupOldMeetings);

// Chat routes for admin
router.get('/chat/:requestId', protectAdminRoute, getChatHistory);
router.put('/chat/:requestId/read', protectAdminRoute, markMessagesAsRead);

// User-based chat routes for admin
router.get('/chat/user/:userId', protectAdminRoute, getUserChatHistory);
router.put('/chat/user/:userId/read', protectAdminRoute, markUserMessagesAsRead);

// Delete message route for admin
router.delete('/chat/delete/:messageId', protectAdminRoute, deleteMessage);

// Notifications
router.post('/send-notifications', async (req, res) => {
  try {
    const { studentIds, message, senderId } = req.body;

    if (!Array.isArray(studentIds) || studentIds.length === 0) {
      return res.status(400).json({ success: false, message: 'studentIds must be a non-empty array' });
    }

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ success: false, message: 'message is required' });
    }

    const validIds = studentIds.filter((id) => mongoose.Types.ObjectId.isValid(id));
    if (validIds.length === 0) {
      return res.status(400).json({ success: false, message: 'No valid student IDs provided' });
    }

    const notificationPayload = {
      _id: new mongoose.Types.ObjectId(),
      message,
      sentAt: new Date(),
      isRead: false,
      senderId: senderId || null,
    };

    const results = await Promise.all(
      validIds.map((studentId) =>
        RegisteredStudent.findByIdAndUpdate(
          studentId,
          { $push: { notifications: notificationPayload } },
          { new: false }
        )
      )
    );

    const updatedCount = results.filter(Boolean).length;
    if (updatedCount === 0) {
      return res.status(404).json({ success: false, message: 'No students found for provided IDs' });
    }

    return res.status(200).json({
      success: true,
      message: `Notifications sent to ${updatedCount} student(s)`,
    });
  } catch (error) {
    console.error('Error sending notifications:', error);
    return res.status(500).json({ success: false, message: 'Failed to send notifications' });
  }
});

module.exports = router; 