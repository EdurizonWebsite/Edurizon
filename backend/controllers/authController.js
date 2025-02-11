const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const generateToken = require('../utils/generateToken');
const bcrypt = require('bcryptjs');
const { OAuth2Client } = require('google-auth-library');

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// @desc    Register a new user
// @route   POST /api/users/register
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, username, email, phone, password, role } = req.body;

  console.log('Registering user:', { name, username, email, phone, role });

  const userExists = await User.findOne({ $or: [{ email }, { username }, { phone }] });

  if (userExists) {
    console.log('User already exists:', userExists);
    res.status(400);
    throw new Error('User with this email, username, or phone already exists');
  }

  const user = await User.create({
    name,
    username,
    email,
    phone,
    password: bcrypt.hashSync(password, 10),
    role,
  });

  if (user) {
    const token = generateToken(user._id);
    console.log('User registered successfully:', user);
    console.log('Generated token:', token);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      username: user.username,
      email: user.email,
      phone: user.phone,
      role: user.role,
      token,
    });
  } else {
    console.log('Invalid user data');
    res.status(400);
    throw new Error('Invalid user data');
  }
});

// @desc    Authenticate user & get token
// @route   POST /api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  console.log('Authenticating user:', { username });

  const user = await User.findOne({ username });

  if (user && (await bcrypt.compare(password, user.password))) {
    const token = generateToken(user._id);
    console.log('User authenticated successfully:', user);
    console.log('Generated token:', token);
    res.json({
      _id: user._id,
      name: user.name,
      username: user.username,
      email: user.email,
      phone: user.phone,
      role: user.role,
      token,
    });
  } else {
    console.log('Invalid username or password');
    res.status(401);
    throw new Error('Invalid username or password');
  }
});

// @desc    Google signup/login
// @route   POST /api/users/google
// @access  Public
const googleAuth = asyncHandler(async (req, res) => {
  const { tokenId } = req.body;

  const ticket = await client.verifyIdToken({
    idToken: tokenId,
    audience: process.env.GOOGLE_CLIENT_ID,
  });

  const { name, email, picture } = ticket.getPayload();

  const user = await User.findOneAndUpdate(
    { email },
    { name, email, picture },
    { new: true, upsert: true }
  );

  const token = generateToken(user._id);
  console.log('Google authentication successful:', user);
  console.log('Generated token:', token);
  res.json({
    _id: user._id,
    name: user.name,
    email: user.email,
    picture: user.picture,
    token,
  });
});

module.exports = { registerUser, authUser, googleAuth };