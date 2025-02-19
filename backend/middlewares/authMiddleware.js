const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      console.log('Received token:', token);
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log('Decoded token:', decoded);
      req.user = await User.findById(decoded.id).select('-password');

      console.log('User authenticated:', req.user);

      if (req.user.role !== 'counselor') {
        console.log('Not authorized as a counselor');
        res.status(401).json({ message: 'Not authorized as a counselor' });
        return;
      }

      next();
    } catch (error) {
      console.error('Token verification failed:', error);
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  } else {
    console.log('No token provided');
    res.status(401).json({ message: 'Not authorized, no token' });
  }
});

module.exports = { protect };