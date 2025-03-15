const express = require('express');
const router = express.Router();
const { registerCounselor, loginCounselor } = require('../controllers/counselorController');
const { protect } = require('../middleware/authMiddleware');

// Public routes (no authentication needed)
router.post('/register', registerCounselor);
router.post('/login', loginCounselor);

// Protected routes (authentication required)
router.get('/profile', protect, (req, res) => {
  res.json({
    id: req.user._id,
    name: req.user.name,
    email: req.user.email,
    role: req.user.role
  });
});

module.exports = router; 