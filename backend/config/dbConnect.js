const mongoose = require('mongoose');
const dotenv = require('dotenv');
const University = require('../models/universityModel');

dotenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);

    // Check if there are any universities in the database
    const universityCount = await University.countDocuments();
    if (universityCount === 0) {
      // Add hardcoded universities
      const universities = [
        { name: 'Harvard Medical School', country: 'USA', type: 'MBBS' },
        { name: 'University of Oxford Medical School', country: 'UK', type: 'MBBS' },
        { name: 'Stanford University School of Medicine', country: 'USA', type: 'MBBS' },
        { name: 'Johns Hopkins University School of Medicine', country: 'USA', type: 'MBBS' },
      ];
      const addedUniversities = await University.insertMany(universities);
      console.log('Hardcoded universities added to the database:', addedUniversities);
    }
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;