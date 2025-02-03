const express = require('express');
const connectDB = require('./config/dbConnect');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const userRoutes = require('./routes/userRoutes');
const universityRoutes = require('./routes/universityRoutes');

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use('/api/users', userRoutes);
app.use('/api/universities', universityRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});