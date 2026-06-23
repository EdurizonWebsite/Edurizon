const Leads = require('../models/leadsModel');

const isOptionalString = (value) => value === undefined || typeof value === 'string';

// @desc    Fetch all leads
// @route   GET /api/leads
// @access  Private
const getAllLeads = async (req, res) => {
  try {
    const leads = await Leads.find({})
      .populate('assignedCounsellor', 'name email')
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: leads.length,
      data: leads
    });
  } catch (error) {
    console.error('Error fetching leads:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching leads',
      error: error.message
    });
  }
};

// @desc    Get single lead by ID
// @route   GET /api/leads/:id
// @access  Private
const getLeadById = async (req, res) => {
  try {
    const lead = await Leads.find({assignedCounsellor:req.params.counsellorId})
      .populate('assignedCounsellor', 'name email');

    if (!lead) {
      return res.status(404).json({
        success: false,
        message: 'Lead not found'
      });
    }

    res.status(200).json({
      success: true,
      data: lead
    });
  } catch (error) {
    console.error('Error fetching lead:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching lead',
      error: error.message
    });
  }
};

// @desc    Add a new lead
// @route   POST /api/leads
// @access  Private
const addLead = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      countryInterested,
      courseName,
      leadType,
      callingStatus,
      leadStatus,
      remark,
      assignedCounsellor,
      assignedCounsellorName,
      callingDate,
      followUpDate,
      source,
      city,
      state,
    } = req.body;

    // Validate required fields
    if (!name) {
      return res.status(400).json({
        success: false,
        message: 'Name is required'
      });
    }

    if (!isOptionalString(city) || !isOptionalString(state)) {
      return res.status(400).json({
        success: false,
        message: 'City and state must be strings'
      });
    }

    const newLead = new Leads({
      name,
      email,
      phone,
      countryInterested: countryInterested || 'None',
      courseName: courseName || 'None',
      leadType: leadType || 'pending',
      callingStatus: callingStatus || 'pending',
      leadStatus: leadStatus || 'pending',
      // Optional explicit calling date (falls back to createdAt/updatedAt in UI)
      callingDate: callingDate || undefined,
      // Allow optional initial follow-up date when creating a lead
      followUpDate: followUpDate || undefined,
      remark,
      assignedCounsellor,
      assignedCounsellorName,
      source: (source && source.trim()) ? source.trim() : 'Website',
      city: city !== undefined ? city.trim() : '',
      state: state !== undefined ? state.trim() : ''
    });

    const savedLead = await newLead.save();
    
    // Populate the assigned counsellor details
    await savedLead.populate('assignedCounsellor', 'name email');

    res.status(201).json({
      success: true,
      message: 'Lead created successfully',
      data: savedLead
    });
  } catch (error) {
    console.error('Error creating lead:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while creating lead',
      error: error.message
    });
  }
};

// @desc    Update/modify a lead
// @route   PUT /api/leads/:id
// @access  Private
const modifyLead = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      countryInterested,
      courseName,
      leadType,
      callingStatus,
      leadStatus,
      remark,
      assignedCounsellor,
      assignedCounsellorName,
      callingDate,
      followUpDate,
      source,
      city,
      state,
    } = req.body;

    if (!isOptionalString(city) || !isOptionalString(state)) {
      return res.status(400).json({
        success: false,
        message: 'City and state must be strings'
      });
    }

    // Find the lead first
    const lead = await Leads.findById(req.params.id);
    
    if (!lead) {
      return res.status(404).json({
        success: false,
        message: 'Lead not found'
      });
    }

    // Update fields
    applyLeadUpdates(lead, req.body);

    const updatedLead = await lead.save();
    
    // Populate the assigned counsellor details
    await updatedLead.populate('assignedCounsellor', 'name email');

    res.status(200).json({
      success: true,
      message: 'Lead updated successfully',
      data: updatedLead
    });
  } catch (error) {
    console.error('Error updating lead:', error);
    res.status(error.statusCode || 500).json({
      success: false,
      message: error.statusCode ? error.message : 'Server error while updating lead',
      error: error.message
    });
  }
};

// @desc    Delete a lead
// @route   DELETE /api/leads/:id
// @access  Private
const deleteLead = async (req, res) => {
  try {
    const lead = await Leads.findById(req.params.id);
    
    if (!lead) {
      return res.status(404).json({
        success: false,
        message: 'Lead not found'
      });
    }

    await Leads.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: 'Lead deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting lead:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while deleting lead',
      error: error.message
    });
  }
};

// @desc    Get leads by status
// @route   GET /api/leads/status/:status
// @access  Private
const getLeadsByStatus = async (req, res) => {
  try {
    const { status } = req.params;
    const validStatuses = ['pending', 'follow-up', 'negative', 'completed', 'registered', 'hot', 'warm', 'cold', 'positive-plus'];
    
    if (!validStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid status parameter'
      });
    }

    const leads = await Leads.find({
      $or: [
        { leadType: status },
        { leadStatus: status },
        { callingStatus: status }
      ]
    })
    .populate('assignedCounsellor', 'name email')
    .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: leads.length,
      data: leads
    });
  } catch (error) {
    console.error('Error fetching leads by status:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching leads by status',
      error: error.message
    });
  }
};

// @desc    Get leads by counsellor
// @route   GET /api/leads/get-all-leads-by-counsellor/:counsellorId
// @access  Private
const getLeadsByCounsellor = async (req, res) => {
  try {
    const { counsellorId } = req.params;
    
    const leads = await Leads.find({ assignedCounsellor: counsellorId })
      .populate('assignedCounsellor', 'name email')
      .sort({ updatedAt: -1 });

    res.status(200).json({
      success: true,
      count: leads.length,
      data: leads
    });
  } catch (error) {
    console.error('Error fetching leads by counsellor:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching leads by counsellor',
      error: error.message
    });
  }
};

// @desc    Update calling status and category instantly
// @route   PATCH /api/leads/:id/update-status
// @access  Private
const applyLeadUpdates = (lead, updates) => {
  const {
    name,
    email,
    phone,
    countryInterested,
    courseName,
    leadType,
    callingStatus,
    leadStatus,
    callingDate,
    followUpDate,
    remark,
    assignedCounsellor,
    assignedCounsellorName,
    source,
    city,
    state,
  } = updates;

  if (name !== undefined) {
    const trimmedName = String(name).trim();
    if (!trimmedName) {
      const error = new Error('Name cannot be empty');
      error.statusCode = 400;
      throw error;
    }
    lead.name = trimmedName;
  }
  if (email !== undefined) lead.email = email;
  if (phone !== undefined) lead.phone = String(phone).trim();
  if (countryInterested !== undefined) {
    lead.countryInterested = String(countryInterested).trim() || 'None';
  }
  if (courseName !== undefined) {
    lead.courseName = String(courseName).trim() || 'None';
  }
  if (leadType !== undefined) lead.leadType = leadType;
  if (callingStatus !== undefined) lead.callingStatus = callingStatus;
  if (leadStatus !== undefined) lead.leadStatus = leadStatus;
  if (callingDate !== undefined) {
    lead.callingDate = callingDate ? new Date(callingDate) : null;
  }
  if (followUpDate !== undefined) {
    lead.followUpDate = followUpDate ? new Date(followUpDate) : null;
  }
  if (remark !== undefined) lead.remark = remark;
  if (assignedCounsellor !== undefined) lead.assignedCounsellor = assignedCounsellor;
  if (assignedCounsellorName !== undefined) {
    lead.assignedCounsellorName = assignedCounsellorName;
  }
  if (source !== undefined) lead.source = String(source).trim() || 'Website';
  if (city !== undefined) lead.city = city.trim();
  if (state !== undefined) lead.state = state.trim();
};

const updateLeadStatus = async (req, res) => {
  try {
    const { id } = req.params;

    if (!isOptionalString(req.body.city) || !isOptionalString(req.body.state)) {
      return res.status(400).json({
        success: false,
        message: 'City and state must be strings',
      });
    }

    const lead = await Leads.findById(id);

    if (!lead) {
      return res.status(404).json({
        success: false,
        message: 'Lead not found',
      });
    }

    applyLeadUpdates(lead, req.body);

    const updatedLead = await lead.save();
    await updatedLead.populate('assignedCounsellor', 'name email');

    res.status(200).json({
      success: true,
      message: 'Lead status updated successfully',
      data: updatedLead,
    });
  } catch (error) {
    console.error('Error updating lead status:', error);
    res.status(error.statusCode || 500).json({
      success: false,
      message: error.statusCode ? error.message : 'Server error while updating lead status',
      error: error.message,
    });
  }
};

module.exports = {
  getAllLeads,
  getLeadById,
  addLead,
  modifyLead,
  deleteLead,
  getLeadsByStatus,
  getLeadsByCounsellor,
  updateLeadStatus
};
