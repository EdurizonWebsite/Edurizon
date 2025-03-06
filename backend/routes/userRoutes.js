const express = require('express');
const { registerUser, authUser, googleAuth, sendOtp, verifyOtp } = require('../controllers/authController');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', authUser);
router.post('/google', googleAuth);
router.post('/sendOtp',sendOtp)
router.post('/verifyOtp',verifyOtp)
module.exports = router;