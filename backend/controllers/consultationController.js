const asyncHandler = require('express-async-handler');
const ConsultationRequest = require('../models/consultationRequestModel');
const Consultation = require('../models/consultationModel');
const User = require('../models/userModel');
const Notification = require('../models/notificationModel');
// Fix the import path to match the existing file
const { generateMeetLinkViaAPI, generateFallbackLink } = require('../utils/googleMeet');
const Leads = require('../models/leadsModel');

// @desc    Create a new consultation request
// @route   POST /api/consultation/request
// @access  Public
const createConsultationRequest = asyncHandler(async (req, res) => {
    try {
        const { name, email, phone, interestedCountry,remark } = req.body;

        // Validate required fields
        if (!name || !email || !phone || !interestedCountry) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required'
            });
        }

        // Create consultation request
        const request = await ConsultationRequest.create({
            name,
            email,
            phone,
            interestedCountry,
            status: 'pending'
        });

        // Create notification for the student
        await Notification.create({
            userId: email,
            title: 'Consultation Request Submitted',
            message: 'Your consultation request has been submitted successfully.',
            type: 'consultation',
            read: false
        });

        // Create a lead
        let source='Website - NMC Page'
        if(remark==null){
          remark='Request Received from Home Page Consultation Form',
          source='Website - Home Page'
        }
        await Leads.create({
          name,
          email,
          phone,
          countryInterested:interestedCountry,
          status: 'pending',
          remark: remark,
          source:source
        })

        res.status(201).json({
            success: true,
            message: 'Consultation request created successfully',
            data: request
        });
    } catch (error) {
        console.error('Error creating consultation request:', error);
        res.status(500).json({
            success: false,
            message: 'Error creating consultation request',
            error: error.message
            // error: error.message0
        });
    }
});

// @desc    Get all pending consultation requests
// @route   GET /api/consultation/pending
// @access  Private (Counselor only)
const getPendingRequests = asyncHandler(async (req, res) => {
  const requests = await ConsultationRequest.find({ status: 'pending' })
    .sort({ createdAt: -1 });
    // console.log(requests);

  res.json({
    success: true,
    data: requests
  });
});

// @desc    Get all counselltation for assigned counsellor
// @route   GET /api/consultation/assigned
const getAssignedRequests = asyncHandler(async (req, res) => {
  
  const {counselorId} = req.params;
  const requests = await ConsultationRequest.find({ assignedTo: counselorId  })
    .sort({ createdAt: -1 });
  res.json({
    success: true,
    data: requests
  });
});


// @desc    Accept a consultation request
// @route   PUT /api/consultation/accept/:requestId
// @access  Private (Counselor only)
const acceptRequest = asyncHandler(async (req, res) => {
  const {counselorId,counselorName} = req.body;
  try {
    const request = await ConsultationRequest.findById(req.params.requestId);
    if (!request) {
      return res.status(404).json({
        success: false,
        message: 'Request no longer available'
      });
    }

    if (request.status !== 'pending') {
      return res.status(400).json({
        success: false,
        message: `Request cannot be accepted. Current status: ${request.status}`
      });
    }

    // Update request status and counselor details
    request.status = 'assigned';
    request.assignedTo = counselorId;
    await request.save();

    // Create notification for the student
    await Notification.create({
      userId: request.email,
      title: 'Consultation Request Accepted',
      message: `Your consultation request has been accepted by ${counselorName}.`,
      type: 'consultation',
      read: false
    });

    return res.json({
      success: true,
      message: 'Request accepted successfully',
      data: request
    });
  } catch (error) {
    console.error('Error accepting request:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to accept request',
      error: error.message
    });
  }
});

// @desc    Get accepted consultation requests for a counselor
// @route   GET /api/consultation/accepted
// @access  Private (Counselor only)
const getAcceptedRequests = asyncHandler(async (req, res) => {
  const requests = await ConsultationRequest.find({
    $or: [
      { status: 'assigned' },
    ]
  }).sort({ createdAt: -1 });


  // Log only upcoming active meetings
  const now = new Date();
  for (const request of requests) {
    if (request.status === 'scheduled' && new Date(request.meetingTime) > now && request.googleMeetLink) {
      console.log(`[ACTIVE MEETING] Counselor view - Request ${request._id} link: ${request.googleMeetLink}`);
    }
  }

  res.json({
    success: true,
    data: requests
  });
});

// @desc    Get consultation requests for a student
// @route   GET /api/consultation/student
// @access  Public
const getStudentRequests = asyncHandler(async (req, res) => {
  const { email } = req.query;

  console.log(`[STUDENT REQUESTS] Getting requests for student email: ${email}`);

  if (!email) {
    res.status(400);
    throw new Error('Please provide student email');
  }

  const requests = await ConsultationRequest.find({ email })
    .populate('acceptedBy', 'name email')
    .sort({ createdAt: -1 });

  console.log(`[STUDENT REQUESTS] Found ${requests.length} requests for student email: ${email}`);
  
  // Log only upcoming active meetings
  const now = new Date();
  for (const request of requests) {
    if (request.status === 'scheduled' && new Date(request.meetingTime) > now && request.googleMeetLink) {
      console.log(`[ACTIVE MEETING] Student view - Request ${request._id} link: ${request.googleMeetLink}`);
    }
  }

  res.json({
    success: true,
    data: requests
  });
});

// @desc    Get consultation requests for a student by student ID
// @route   GET /api/consultation/student/:studentId
// @access  Private
const getStudentRequestsById = asyncHandler(async (req, res) => {
  const { studentId } = req.params;

  console.log(`[STUDENT REQUESTS BY ID] Getting requests for student ID: ${studentId}`);

  if (!studentId) {
    res.status(400);
    throw new Error('Please provide student ID');
  }

  // Get student email from user data
  const student = await User.findById(studentId);
  if (!student) {
    res.status(404);
    throw new Error('Student not found');
  }

  const requests = await ConsultationRequest.find({ email: student.email })
    .populate('acceptedBy', 'name email')
    .sort({ createdAt: -1 });

  console.log(`[STUDENT REQUESTS BY ID] Found ${requests.length} requests for student ID: ${studentId}`);
  
  res.json({
    success: true,
    data: requests
  });
});

// Helper function to check if a link is valid
function isValidGoogleMeetLink(link) {
  if (!link) return false;
  return link.startsWith('https://meet.google.com/');
}

// @desc    Create a new consultation
// @route   POST /api/consultation/create
// @access  Private
const createConsultation = asyncHandler(async (req, res) => {
  const { name, email, phone, preferredDate, preferredTime, message } = req.body;

  // Create new consultation request
  const consultation = await Consultation.create({
    name,
    email,
    phone,
    preferredDate,
    preferredTime,
    message
  });

  // Find available counselors and notify them (this can be expanded later)
  const counselors = await User.find({ role: 'counselor' });
  
  // Here you can add notification logic for counselors
  // For now, we'll just return success

  res.status(201).json({
    success: true,
    message: 'Consultation request created successfully',
    data: consultation
  });
});

// @desc    Get all consultation requests (for counselors)
// @route   GET /api/consultation
// @access  Private (Counselor only)
const getConsultations = asyncHandler(async (req, res) => {
  const consultations = await Consultation.find()
    .sort({ createdAt: -1 })
    .populate('counselor', 'name email');

  res.status(200).json({
    success: true,
    data: consultations
  });
});

// @desc    Update consultation status (for counselors)
// @route   PUT /api/consultation/:consultationId
// @access  Private (Counselor only)
const updateConsultation = asyncHandler(async (req, res) => {
  const { consultationId } = req.params;
  const { status, counselorId } = req.body;

  const consultation = await Consultation.findByIdAndUpdate(
    consultationId,
    {
      status,
      counselor: counselorId,
      ...(status === 'accepted' && { acceptedAt: Date.now() })
    },
    { new: true }
  ).populate('counselor', 'name email');

  if (!consultation) {
    return res.status(404).json({
      success: false,
      message: 'Consultation not found'
    });
  }

  res.status(200).json({
    success: true,
    data: consultation
  });
});

// @desc    Get consultations by email (for students)
// @route   GET /api/consultation/email
// @access  Private
const getConsultationsByEmail = asyncHandler(async (req, res) => {
  const { email } = req.query;

  const consultations = await Consultation.find({ email })
    .sort({ createdAt: -1 })
    .populate('counselor', 'name email');

  res.status(200).json({
    success: true,
    data: consultations
  });
});

// @desc    Schedule a consultation meeting
// @route   PUT /api/consultation/schedule/:requestId
// @access  Private (Counselor only)
const scheduleMeeting = asyncHandler(async (req, res) => {
  const { meetingTime } = req.body;
  const requestId = req.params.requestId;

  console.log(`[SCHEDULING] Scheduling meeting for request: ${requestId}, time: ${meetingTime}`);

  if (!meetingTime) {
    return res.status(400).json({
      success: false,
      message: 'Meeting time is required'
    });
  }

  try {
    const request = await ConsultationRequest.findById(requestId);

    if (!request) {
      return res.status(404).json({
        success: false,
        message: 'Consultation request not found'
      });
    }

    if (request.status !== 'accepted') {
      return res.status(400).json({
        success: false,
        message: 'Request must be accepted before scheduling'
      });
    }

    if (!request.acceptedBy.equals(req.user._id)) {
      return res.status(403).json({
        success: false,
        message: 'Only the accepting counselor can schedule this meeting'
      });
    }

    // Define the counselor variable using req.user
    const counselor = req.user;

    // Generate the Google Meet link
    const meetLink = await generateMeetLinkViaAPI(
      requestId,
      meetingTime,
      counselor.email, // Use the counselor's email
      request.email,
      request.name
    );

    // Update the consultation request with the meeting details
    request.status = 'scheduled';
    request.meetingTime = meetingTime;
    request.googleMeetLink = meetLink;
    await request.save();

    // Send notifications to both the student and counselor
    await Notification.create({
      userId: request.email,
      title: 'Meeting Scheduled',
      message: `Your consultation meeting has been scheduled for ${new Date(meetingTime).toLocaleString()}.`,
      type: 'consultation',
      link: meetLink,
      read: false
    });

    await Notification.create({
      userId: counselor.email,
      title: 'Meeting Scheduled',
      message: `You have scheduled a consultation with ${request.name} for ${new Date(meetingTime).toLocaleString()}.`,
      type: 'consultation',
      link: meetLink,
      read: false
    });

    return res.json({
      success: true,
      data: request
    });
  } catch (error) {
    console.error('[SCHEDULING ERROR]', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to schedule meeting',
      error: error.message
    });
  }
});

// @desc    Reject a consultation request
// @route   PUT /api/consultation/reject/:requestId
// @access  Private (Counselor only)
const rejectRequest = asyncHandler(async (req, res) => {
  try {
    const request = await ConsultationRequest.findById(req.params.requestId);

    if (!request) {
      return res.status(404).json({
        success: false,
        message: 'Consultation request not found'
      });
    }

    if (request.status !== 'pending') {
      return res.status(400).json({
        success: false,
        message: 'This request cannot be rejected in its current state'
      });
    }

    request.status = 'rejected';
    await request.save();

    // Create notification for the student
    await Notification.create({
      userId: request.email,
      title: 'Consultation Request Rejected',
      message: 'Your consultation request has been rejected. Please try booking another slot.',
      type: 'consultation',
      read: false
    });

    res.json({
      success: true,
      data: request
    });
  } catch (error) {
    console.error('Error rejecting request:', error);
    res.status(500).json({
      success: false,
      message: 'Error rejecting consultation request'
    });
  }
});

// @desc    Get notifications for a student
// @route   GET /api/consultation/notifications
// @access  Private
const getStudentNotifications = asyncHandler(async (req, res) => {
  const { email } = req.query;

  if (!email) {
    res.status(400);
    throw new Error('Please provide student email');
  }

  try {
    // Get both consultation requests and direct notifications
    const [requests, notifications] = await Promise.all([
      ConsultationRequest.find({ email })
        .populate('acceptedBy', 'name email')
        .sort({ createdAt: -1 }),
      Notification.find({ userId: email })
        .sort({ createdAt: -1 })
    ]);

    // Transform requests into notification format
    const requestNotifications = requests.map(request => ({
      _id: request._id,
      status: request.status,
      acceptedBy: request.acceptedBy,
      meetingTime: request.meetingTime,
      googleMeetLink: request.googleMeetLink,
      title: getNotificationTitle(request.status),
      message: getNotificationMessage(request),
      createdAt: request.createdAt,
      type: 'consultation'
    }));

    // Combine both types of notifications and sort by creation date
    const allNotifications = [...requestNotifications, ...notifications]
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    res.json({
      success: true,
      data: allNotifications
    });
  } catch (error) {
    console.error('Error fetching notifications:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching notifications',
      error: error.message
    });
  }
});

// Helper function to get notification title
const getNotificationTitle = (status) => {
  switch (status) {
    case 'pending':
      return 'Consultation Request Pending';
    case 'accepted':
      return 'Consultation Request Accepted';
    case 'scheduled':
      return 'Consultation Meeting Scheduled';
    case 'completed':
      return 'Consultation Completed';
    default:
      return 'Consultation Update';
  }
};

// Helper function to get notification message
const getNotificationMessage = (request) => {
  switch (request.status) {
    case 'pending':
      return 'Your consultation request is being reviewed.';
    case 'accepted':
      return `Your consultation request has been accepted by ${request.acceptedBy?.name || 'a counselor'}.`;
    case 'scheduled':
      return `Your consultation has been scheduled for ${new Date(request.meetingTime).toLocaleString()}.`;
    case 'completed':
      return 'Your consultation has been completed.';
    default:
      return 'Your consultation request has been updated.';
  }
};

// @desc    Delete a consultation request
// @route   DELETE /api/consultation/delete/:requestId
// @access  Private (Admin only)
const deleteRequest = asyncHandler(async (req, res) => {
  const { requestId } = req.params;
  const request = await ConsultationRequest.findByIdAndDelete(requestId);

  if (!request) {
    return res.status(404).json({
      success: false,
      message: 'Consultation request not found'
    });
  }

  res.json({
    success: true,
    message: 'Consultation request deleted successfully'
  });
});

// @desc    Update counsellor for a consultation request
// @route   PUT /api/consultation/update-counsellor/:requestId
// @access  Private (Admin/Super Admin only)
const updateCounsellor = asyncHandler(async (req, res) => {
  const { requestId } = req.params;
  const { counsellorId, typeofLead, counsellingStatus } = req.body;
  console.log("typeofLead",typeofLead);
  try {
    const request = await ConsultationRequest.findById(requestId);

    if (!request) {
      return res.status(404).json({
        success: false,
        message: 'Consultation request not found'
      });
    }

    // Check if the request is in a state that can be reassigned
    if (request.status === 'completed') {
      return res.status(400).json({
        success: false,
        message: 'Cannot reassign a completed consultation request'
      });
    }

    // Validate typeofLead
    if (typeofLead && !['warm', 'cold', 'hot'].includes(typeofLead)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid type of lead. Must be warm, cold, or hot'
      });
    }

    // Validate counsellingStatus
    if (counsellingStatus && !['pending', 'completed'].includes(counsellingStatus)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid counselling status. Must be pending or completed'
      });
    }

    // Update the consultation request
    const updates = {};
    if(counsellorId){
      updates.assignedTo = counsellorId;
      updates.status = 'assigned';
    }
    // Only add fields if they are provided
    if (typeofLead) {
      updates.typeofLead = typeofLead;
    }
    if (counsellingStatus) {
      updates.counsellingStatus = counsellingStatus;
    }

    // Update the request with all changes
    Object.assign(request, updates);
    await request.save();

    // Create notification for the student
    await Notification.create({
      userId: request.email,
      title: 'Consultation Request Updated',
      message: `Your consultation request has been updated.`,
      type: 'consultation',
      read: false
    });

    // Create notification for the new counsellor if counsellor is being changed
    if (counsellorId) {
      await Notification.create({
        userId: counsellorId,
        title: 'New Consultation Assignment',
        message: `You have been assigned a consultation request from ${request.name}.`,
        type: 'consultation',
        read: false
      });
    }

    return res.json({
      success: true,
      message: 'Consultation request updated successfully',
      data: request
    });
  } catch (error) {
    console.error('Error updating consultation request:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to update consultation request',
      error: error.message
    });
  }
});

module.exports = {
  createConsultationRequest,
  getPendingRequests,
  acceptRequest,
  getAcceptedRequests,
  getStudentRequests,
  getStudentRequestsById,
  createConsultation,
  getConsultations,
  updateConsultation,
  getConsultationsByEmail,
  scheduleMeeting,
  rejectRequest,
  getStudentNotifications,
  deleteRequest,
  getAssignedRequests,
  updateCounsellor
};