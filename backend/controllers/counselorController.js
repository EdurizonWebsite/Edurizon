const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

// Generate a random username and password
const generateCredentials = () => {
  const username = 'counselor_' + crypto.randomBytes(4).toString('hex');
  const password = crypto.randomBytes(8).toString('hex');
  return { username, password };
};

// Register a new counselor
const registerCounselor = async (req, res) => {
  try {
    // Generate random username and password
    const { username, password } = generateCredentials();

    // Create new counselor with minimal details
    const counselor = await User.create({
      name: username, // Use username as name
      username,
      password,
      role: 'counselor',
      email: `${username}@edurizon.com`, // Generate a placeholder email
    });

    // Return the auto-generated credentials
    res.status(201).json({
      message: 'Counselor registered successfully',
      credentials: {
        username,
        password
      }
    });

  } catch (error) {
    console.error('Error in counselor registration:', error);
    res.status(500).json({ message: 'Error registering counselor' });
  }
};

// Login counselor
const loginCounselor = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find counselor by username
    const counselor = await User.findOne({ username, role: 'counselor' });
    if (!counselor) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Check password
    if (counselor.password !== password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate a short-lived token (2 hours)
    const token = jwt.sign(
      { id: counselor._id, role: counselor.role },
      process.env.JWT_SECRET,
      { expiresIn: '2h' }
    );

    res.status(200).json({
      message: 'Login successful',
      token,
      counselor: {
        id: counselor._id,
        username: counselor.username
      }
    });

  } catch (error) {
    console.error('Error in counselor login:', error);
    res.status(500).json({ message: 'Error logging in' });
  }
};

module.exports = {
  registerCounselor,
  loginCounselor
}; 