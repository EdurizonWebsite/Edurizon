const asyncHandler = require('express-async-handler');
const University = require('../models/universityModel');

// @desc    Get all MBBS universities
// @route   GET /api/universities/mbbs
// @access  Public
const getMBBSUniversities = asyncHandler(async (req, res) => {
  const universities = await University.find({ type: 'MBBS' });
  res.json(universities);
});

// @desc    Get a single university by ID
// @route   GET /api/universities/:id
// @access  Public
const getUniversityById = asyncHandler(async (req, res) => {
  const university = await University.findById(req.params.id);
  if (university) {
    res.json(university);
  } else {
    res.status(404);
    throw new Error('University not found');
  }
});

module.exports = { getMBBSUniversities, getUniversityById };