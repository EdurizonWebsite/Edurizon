const express = require('express');
const connectDB = require('./config/dbConnect');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const userRoutes = require('./routes/userRoutes');
const meetingRoutes = require('./routes/meetingRoutes');
const counselorRoutes = require('./routes/counselorRoutes');
const consultationRoutes = require('./routes/consultationRoutes');
const authRoutes = require('./routes/authRoutes');
const chatRoutes = require('./routes/chatRoutes');
const chatbotRoutes=require('./routes/chatbotRoutes')
const collegePredictorRoutes=require('./routes/collegePredictorRoutes')
const adminRoutes = require('./routes/adminRoutes');
const digitalVideoRoutes = require('./routes/digitalVideoRoutes');
const adminConsultationRoutes = require('./routes/adminConsultationRoutes');
const registeredStudentRoutes = require('./routes/registeredStudentRoutes')
const studentRoutes = require('./routes/studentRoutes')
const leadsRoutes = require('./routes/leadsRoutes')
const partneredUniversitiesRoutes = require('./routes/partneredUniversitiesRoutes')
const attendanceRoutes = require('./routes/attendanceRoutes')
const adminTaskRoutes = require('./routes/adminTaskRoutes');
const financeRoutes = require('./routes/financeRoutes');
const staticAttributeRoutes = require('./routes/staticAttributeRoutes');
const http = require('http');
const { Server } = require('socket.io');
const ChatMessage = require('./models/chatMessageModel');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const { v2: cloudinary } = require('cloudinary');
dotenv.config();

const app = express();

// Create HTTP server
const server = http.createServer(app);

// Increase server timeout and connection limits
server.keepAliveTimeout = 65000; // 65 seconds
server.headersTimeout = 66000; // 66 seconds
server.maxConnections = 1000; // Maximum concurrent connections

// Middleware
const allowedOrigins = [
    'http://localhost:3000', 
    'http://localhost:3001', 
    'http://192.168.1.2:3000',
    'http://edurizon.in',
    'http://www.edurizon.in',
    'https://edurizon.in',
    'https://www.edurizon.in',
    'https://edurizon-git-noddy-updated-utkarshs-projects-467c395b.vercel.app',
    'https://edurizon-five.vercel.app',
    'https://edurizon-blsj.vercel.app',
    "https://edurizon-git-main-educationmentor-5832s-projects.vercel.app/",
    'https://edurizon.vercel.app/'
];

app.use(cors({
    origin: function (origin, callback) {
        // Allow requests with no origin (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        
        // In production, be more permissive
        if (process.env.NODE_ENV === 'production') {
            // Allow any edurizon.in subdomain
            if (origin && origin.includes('edurizon.in')) {
                console.log('CORS allowing origin:', origin);
                return callback(null, true);
            }
            // Allow Vercel deployments
            if (origin && origin.includes('vercel.app')) {
                console.log('CORS allowing Vercel origin:', origin);
                return callback(null, true);
            }
        }
        
        if (allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            console.log('CORS blocked origin:', origin);
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS','PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
}));

// Additional CORS headers for production
app.use((req, res, next) => {
    const origin = req.headers.origin;
    
    // Allow all edurizon.in subdomains and Vercel deployments in production
    if (process.env.NODE_ENV === 'production' && origin && 
        (origin.includes('edurizon.in') || origin.includes('vercel.app'))) {
        res.header('Access-Control-Allow-Origin', origin);
        res.header('Access-Control-Allow-Credentials', 'true');
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    }
    
    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }
    
    next();
});

// Fallback CORS for Socket.IO (more permissive)
app.use('/socket.io/', (req, res, next) => {
    const origin = req.headers.origin;
    
    if (process.env.NODE_ENV === 'production') {
        if (origin && (origin.includes('edurizon.in') || origin.includes('vercel.app'))) {
            res.header('Access-Control-Allow-Origin', origin);
            res.header('Access-Control-Allow-Credentials', 'true');
            res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
        }
    }
    
    next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Database Connection
connectDB();

// Cloudinary Setup
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_API_KEY
});


// Set up Socket.io (only if not in serverless environment)
let io;
if (process.env.VERCEL !== '1') {
  io = new Server(server, {
    cors: {
      origin: function (origin, callback) {
          // Allow requests with no origin (like mobile apps or curl requests)
          if (!origin) return callback(null, true);
          
          // In production, be more permissive
          if (process.env.NODE_ENV === 'production') {
              // Allow any edurizon.in subdomain
              if (origin && origin.includes('edurizon.in')) {
                  console.log('Socket.IO allowing origin:', origin);
                  return callback(null, true);
              }
              // Allow Vercel deployments
              if (origin && origin.includes('vercel.app')) {
                  console.log('Socket.IO allowing Vercel origin:', origin);
                  return callback(null, true);
              }
          }
          
          if (allowedOrigins.indexOf(origin) !== -1) {
              callback(null, true);
          } else {
              console.log('Socket.IO CORS blocked origin:', origin);
              callback(new Error('Not allowed by CORS'));
          }
      },
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      credentials: true,
      allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
    },
    pingTimeout: 120000, // 2 minutes (increase socket timeout)
    pingInterval: 25000, // 25 seconds
    transports: ['polling', 'websocket'],
    allowEIO3: true, // Allow Engine.IO v3 clients
    upgradeTimeout: 10000, // 10 seconds for upgrade timeout
    maxHttpBufferSize: 1e6, // 1MB max buffer size
    serveClient: false // Don't serve the client files
  });
} else {
  console.log('Running in Vercel serverless environment - Socket.IO disabled');
}

// Track active users
const activeUsers = new Map();

// Add connection error handling (only if Socket.IO is available)
if (io) {
  io.on('connection', (socket) => {
    console.log('Socket connected:', socket.id);
    
    socket.on('disconnect', (reason) => {
      console.log('Socket disconnected:', socket.id, 'Reason:', reason);
    });
    
    socket.on('error', (error) => {
      console.error('Socket error:', socket.id, error);
    });
  });
}

// Socket middleware for authentication (only if Socket.IO is available)
if (io) {
io.use((socket, next) => {
  const token = socket.handshake.auth.token;
  
  console.log('Socket authentication attempt with token:', token ? token.substring(0, 20) + '...' : 'No token');
  
  if (!token) {
    console.error('No authentication token provided');
    return next(new Error('Authentication token is missing'));
  }
  
  try {
    // Accept both Bearer tokens and direct admin tokens
    if (token.startsWith('Bearer ') || token.length > 50) {
      console.log('Token format is valid');
      next();
    } else {
      console.error('Invalid token format');
      next(new Error('Invalid token format'));
    }
  } catch (error) {
    console.error('Socket authentication error:', error);
    next(new Error('Authentication failed'));
  }
});

// Socket.io connection handling
io.on('connection', (socket) => {
  console.log('New client connected:', socket.id);
  
  // Store user info if provided
  if (socket.handshake.query.userId) {
    const userId = socket.handshake.query.userId;
    const userType = socket.handshake.query.userType;
    const adminRole = socket.handshake.query.adminRole;
    
    activeUsers.set(userId, socket.id);
    console.log(`User ${userId} (${userType}) is active with socket ${socket.id}`);
    if (adminRole) {
      console.log(`Admin role: ${adminRole}`);
    }
  }
  
  // Join a room based on consultation request ID or user ID
  socket.on('join_room', (roomId) => {
    if (!roomId || !mongoose.Types.ObjectId.isValid(roomId)) {
      socket.emit('error', { message: 'Invalid room ID' });
      return;
    }
    
    socket.join(roomId);
    console.log(`User joined room: ${roomId}`);
    
    // Notify client that join was successful
    socket.emit('joined_room', { roomId });
  });
  
  // Handle message sending
  socket.on('send_message', async (data) => {
    try {
      const { senderType, senderEmail, senderName, consultationRequest, message, clientMessageId, senderId, receiverId } = data;
      
      // For user-based chat, we need valid senderId and receiverId
      if (senderId && receiverId && receiverId !== 'counselor') {
        if (!mongoose.Types.ObjectId.isValid(senderId) || !mongoose.Types.ObjectId.isValid(receiverId)) {
          socket.emit('message_error', { 
            clientMessageId,
            error: 'Invalid sender or receiver ID format' 
          });
          return;
        }
      } else if (!consultationRequest || !mongoose.Types.ObjectId.isValid(consultationRequest)) {
        socket.emit('message_error', { 
          clientMessageId,
          error: 'Invalid request ID format' 
        });
        return;
      }
      
      // Save message to database
      const messageData = {
        senderType,
        senderEmail,
        senderName,
        message,
        clientMessageId,
        delivered: true
      };
      
      // Add user-based fields if provided and valid
      if (senderId && receiverId && receiverId !== 'counselor' && mongoose.Types.ObjectId.isValid(receiverId)) {
        messageData.senderId = senderId;
        messageData.receiverId = receiverId;
      } else {
        messageData.consultationRequest = consultationRequest;
      }
      
      console.log('Creating message with data:', messageData);
      const newMessage = await ChatMessage.create(messageData);
      console.log('Message created successfully:', newMessage._id);
      
      const responseData = {
        ...newMessage.toObject(),
        createdAt: new Date()
      };
      
      // Emit the message to the appropriate room
      if (senderId && receiverId && receiverId !== 'counselor' && mongoose.Types.ObjectId.isValid(receiverId)) {
        // For user-based chat, emit to the room (both users should be in the same room)
        const roomId = receiverId; // Use receiverId as room ID for user-based chat
        io.to(roomId).emit('receive_message', responseData);
      } else {
        // For consultation-request-based chat, emit to the consultation room
        io.to(consultationRequest).emit('receive_message', responseData);
      }
      
      // Acknowledge message receipt back to sender
      socket.emit('message_delivered', { 
        clientMessageId,
        messageId: newMessage._id,
        timestamp: newMessage.createdAt
      });
      
    } catch (error) {
      console.error('Error handling message:', error);
      console.error('Message data:', data);
      console.error('Error details:', error.message);
      console.error('Error stack:', error.stack);
      
      // Send error back to client for handling
      if (data && data.clientMessageId) {
        socket.emit('message_error', { 
          clientMessageId: data.clientMessageId,
          error: `Failed to save message: ${error.message}`
        });
      }
    }
  });
  
  // Handle marking messages as read
  socket.on('mark_read', async (data) => {
    try {
      const { consultationRequest, userType } = data;
      
      if (!consultationRequest || !mongoose.Types.ObjectId.isValid(consultationRequest)) {
        return;
      }
      
      const oppositeType = userType === 'counselor' ? 'student' : 'counselor';
      
      // Mark messages from the other user as read
      await ChatMessage.updateMany(
        { 
          consultationRequest,
          senderType: oppositeType,
          read: false
        },
        { read: true }
      );
      
      // Notify the room that messages have been read
      io.to(consultationRequest).emit('messages_read', { 
        consultationRequest, 
        userType 
      });
      
    } catch (error) {
      console.error('Error marking messages as read:', error);
    }
  });
  
  // Handle user going offline
  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
    
    // Remove user from active users
    for (const [userId, socketId] of activeUsers.entries()) {
      if (socketId === socket.id) {
        activeUsers.delete(userId);
        console.log(`User ${userId} is now offline`);
        break;
      }
    }
  });
});
} // End of Socket.IO conditional block

// Fallback chat endpoints for serverless environment
if (!io) {
  // Simple polling-based chat endpoints
  app.get('/api/chat/poll/:roomId', async (req, res) => {
    try {
      const { roomId } = req.params;
      const { lastMessageId } = req.query;
      
      // Get messages newer than lastMessageId
      const query = { consultationRequest: roomId };
      if (lastMessageId) {
        query._id = { $gt: lastMessageId };
      }
      
      const messages = await ChatMessage.find(query)
        .sort({ createdAt: 1 })
        .limit(50);
      
      res.json({ success: true, messages });
    } catch (error) {
      console.error('Polling error:', error);
      res.status(500).json({ success: false, error: error.message });
    }
  });
  
  app.post('/api/chat/send', async (req, res) => {
    try {
      const { consultationRequest, message, senderType, senderId } = req.body;
      
      const newMessage = new ChatMessage({
        consultationRequest,
        message,
        senderType,
        senderId,
        read: false
      });
      
      await newMessage.save();
      res.json({ success: true, message: newMessage });
    } catch (error) {
      console.error('Send message error:', error);
      res.status(500).json({ success: false, error: error.message });
    }
  });
}

// CORS test endpoint
app.get('/api/cors-test', (req, res) => {
    res.json({ 
        message: 'CORS is working!', 
        origin: req.headers.origin,
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV,
        allowedOrigins: allowedOrigins
    });
});

// Socket.IO connection test endpoint
app.get('/api/socket-test', (req, res) => {
    if (io) {
        res.json({
            message: 'Socket.IO server is running',
            timestamp: new Date().toISOString(),
            activeConnections: io.engine.clientsCount
        });
    } else {
        res.json({
            message: 'Socket.IO is disabled in serverless environment',
            timestamp: new Date().toISOString(),
            activeConnections: 0
        });
    }
});

// Routes
app.use('/api/users', userRoutes);
app.use('/api/meetings', meetingRoutes);
app.use('/api/counselor', counselorRoutes);
app.use('/api/consultation', consultationRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/chatbot',chatbotRoutes)
app.use('/api/collegePredictor',collegePredictorRoutes)
app.use('/api/admin', adminTaskRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/admin/digital', digitalVideoRoutes);
app.use('/api/digital', digitalVideoRoutes);
app.use('/api/admin/consultation', adminConsultationRoutes);
app.use('/api/admin/finance', financeRoutes);
app.use('/api/registered-students', registeredStudentRoutes);
app.use('/api/student', studentRoutes);
app.use('/api/leads', leadsRoutes);
app.use('/api/partnered-universities', partneredUniversitiesRoutes);
app.use('/api/attendance', attendanceRoutes);
app.use('/api/static-attributes', staticAttributeRoutes);


// Use the HTTP server for listening
const PORT = process.env.PORT || 5001;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});