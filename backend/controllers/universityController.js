const asyncHandler = require('express-async-handler');
const University = require('../models/universityModel');

// @desc    Get all MBBS universities
// @route   GET /api/universities/mbbs
// @access  Public
const getMBBSUniversities = asyncHandler(async (req, res) => {
  const universities = await University.find({ type: 'MBBS' });
  res.json(universities);
});

module.exports = { getMBBSUniversities };