const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const generateToken = require('../utils/generateToken');
const bcrypt = require('bcryptjs');
const { OAuth2Client } = require('google-auth-library');
const axios = require('axios');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const sessionStore = {}; // Store OTPs temporarily

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

const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
};

const sendOtp = asyncHandler(async (req, res) => {
    const { phone, isRegistration } = req.body;
    
    if (!phone) {
        return res.status(400).json({ message: 'Phone number is required' });
    }

    try {
        // For registration, check if user already exists
        if (isRegistration) {
            const existingUser = await User.findOne({ phone });
            if (existingUser) {
                return res.status(400).json({ 
                    message: 'User with this phone number already exists. Please login instead.'
                });
            }
        }
        // For login, check if user exists
        else {
            const user = await User.findOne({ phone });
            if (!user) {
                return res.status(404).json({ 
                    message: 'No user found with this phone number. Please register first.'
                });
            }
        }

        const otp = generateOTP();
        sessionStore[phone] = otp;

        // Log OTP for development/testing
        console.log(`OTP for ${phone}: ${otp}`);

        // Always return success with OTP for development
        return res.status(200).json({ 
            status: "success",
            message: `OTP sent successfully for ${isRegistration ? 'registration' : 'login'}`,
            otp: otp, // For development/testing
            dev_note: "SMS sending is simulated for development"
        });
    } catch (error) {
        console.error('Error in sendOtp:', error);
        return res.status(500).json({ 
            status: "error",
            message: "Failed to send OTP. Please try again.",
            error: error.message
        });
    }
});

const verifyOtp = asyncHandler(async (req, res) => {
    const { phone, otp, isRegistration, userData } = req.body;

    if (!phone || !otp) {
        return res.status(400).json({ message: 'Phone number and OTP are required' });
    }

    // Check if OTP exists and matches
    if (!sessionStore[phone]) {
        return res.status(400).json({ 
            message: "OTP has already been verified or has expired. Please request a new OTP.",
            alreadyVerified: true
        });
    }

    if (sessionStore[phone] !== otp) {
        return res.status(400).json({ message: "Invalid OTP" });
    }

    try {
        // Delete OTP from session store immediately to prevent reuse
        delete sessionStore[phone];

        // Check if user exists
        let user = await User.findOne({ phone });

        // Handle Registration
        if (isRegistration) {
            if (user) {
                return res.status(400).json({ 
                    message: "User already exists with this phone number",
                    alreadyVerified: true
                });
            }

            if (!userData || !userData.name || !userData.username || !userData.email || !userData.password) {
                return res.status(400).json({ message: "All registration fields are required" });
            }

            // Check if username or email already exists
            const existingUser = await User.findOne({
                $or: [{ username: userData.username }, { email: userData.email }]
            });

            if (existingUser) {
                return res.status(400).json({ message: "Username or email already exists" });
            }

            // Create new user
            user = await User.create({
                name: userData.name,
                username: userData.username,
                email: userData.email,
                phone,
                password: bcrypt.hashSync(userData.password, 10),
                role: userData.role || 'user'
            });
        }
        // Handle Login
        else {
            if (!user) {
                return res.status(404).json({ 
                    message: "No user found with this phone number. Please register first.",
                    alreadyVerified: true
                });
            }
        }

        // Generate JWT token with 6 months expiry
        const token = generateToken(user._id, '180d');

        // Set JWT as HTTP-only cookie with proper settings
        res.cookie('jwt', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // Only send cookie over HTTPS in production
            sameSite: 'lax', // Changed from 'strict' to 'lax' to allow cross-site requests
            maxAge: 180 * 24 * 60 * 60 * 1000, // 180 days
            path: '/', // Ensure cookie is available across the entire domain
            domain: process.env.NODE_ENV === 'production' ? process.env.DOMAIN : 'localhost' // Set domain based on environment
        });

        // Return user data and token
        return res.json({
            status: "success",
            message: isRegistration ? "Registration successful" : "Login successful",
            alreadyVerified: true,
            user: {
                _id: user._id,
                name: user.name,
                username: user.username,
                email: user.email,
                phone: user.phone,
                role: user.role
            }
        });
    } catch (error) {
        console.error('Verification Error:', error);
        return res.status(500).json({ 
            message: "Error during verification",
            error: error.message 
        });
    }
});

module.exports = { registerUser, authUser, googleAuth, sendOtp, verifyOtp };