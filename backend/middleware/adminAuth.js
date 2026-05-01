const jwt = require('jsonwebtoken');
const { AdminUser } = require('../models/AdminUser');
const config = require('../config/config');

// Middleware to protect admin routes
exports.protectAdminRoute = async (req, res, next) => {
  try {
    // 1. Get token from header
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      return res.status(401).json({
        status: 'error',
        message: 'You are not logged in. Please log in to get access.'
      });
    }

    // 2. Verify token
    const decoded = jwt.verify(token, config.jwt.adminSecret);

    // 3. Check if admin user still exists
    const adminUser = await AdminUser.findById(decoded.id);
    if (!adminUser || !adminUser.active) {
      return res.status(401).json({
        status: 'error',
        message: 'The user belonging to this token no longer exists or is inactive.'
      });
    }

    // 4. Check if user changed password after token was issued
    if (adminUser.changedPasswordAfter(decoded.iat)) {
      return res.status(401).json({
        status: 'error',
        message: 'User recently changed password! Please log in again.'
      });
    }

    // Grant access to protected route
    req.adminUser = adminUser;
    next();
  } catch (error) {
    return res.status(401).json({
      status: 'error',
      message: 'Invalid token or authorization error.'
    });
  }
};

// Middleware to restrict access based on roles
exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.adminUser.role)) {
      return res.status(403).json({
        status: 'error',
        message: 'You do not have permission to perform this action'
      });
    }
    next();
  };
};

// Middleware to check if user is super admin
exports.isSuperAdmin = (req, res, next) => {
  if (req.adminUser.role !== 'super-admin') {
    return res.status(403).json({
      status: 'error',
      message: 'This action requires super admin privileges'
    });
  }
  next();
}; 

exports.isCounsellorAdmin = (req, res, next) => {
  if (req.adminUser.role !== 'counsellorAdmin' && req.adminUser.role !== 'super-admin') {
    return res.status(403).json({
      status: 'error',
      message: 'This action requires counsellor admin or super admin privileges'
    });
  }
  next();
}; 