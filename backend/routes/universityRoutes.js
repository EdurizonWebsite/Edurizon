const express = require('express');
const { getMBBSUniversities, getUniversityById } = require('../controllers/universityController');
const router = express.Router();

router.get('/mbbs', getMBBSUniversities);
router.get('/:id', getUniversityById);

module.exports = router;


