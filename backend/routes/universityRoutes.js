const express = require('express');
const { getMBBSUniversities } = require('../controllers/universityController');
const router = express.Router();

router.get('/mbbs', getMBBSUniversities);

module.exports = router;