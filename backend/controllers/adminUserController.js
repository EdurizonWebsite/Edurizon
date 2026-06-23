const { AdminUser, ROLES } = require('../models/AdminUser');

// Get all admin users
exports.getAllUsers = async (req, res) => {
  try {
    const { role } = req.query;
    
    // Build query object
    const query = {};
    if (role) {
      // Use the exact role from the ROLES enum
      const normalizedRole = role.toLowerCase();
      if (normalizedRole === 'counsellor' || normalizedRole === 'counselor') {
        query.role = { $in: [ROLES.COUNSELLOR, ROLES.SUPER_ADMIN] };  
      } else {
        query.role = role;
      }
    }

    const users = await AdminUser.find(query)
      .select('-password -passwordChangedAt -passwordResetToken -passwordResetExpires')
      .sort({ createdAt: -1 });

    res.status(200).json({
      status: 'success',
      data: users
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: error.message
    });
  }
};

// Toggle user access
exports.toggleAccess = async (req, res) => {
  try {
    const user = await AdminUser.findById(req.params.userId);
    
    if (!user) {
      return res.status(404).json({
        status: 'error',
        message: 'User not found'
      });
    }

    // Prevent super-admin from being deactivated
    if (user.role === 'super-admin') {
      return res.status(403).json({
        status: 'error',
        message: 'Super admin access cannot be modified'
      });
    }

    user.active = !user.active;
    await user.save({ validateBeforeSave: false });

    res.status(200).json({
      status: 'success',
      data: {
        user
      }
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: error.message
    });
  }
};

// Update admin user
exports.updateUser = async (req, res) => {
  try {
    const {
      username,
      email,
      password,
      role,
      firstName,
      lastName,
      country,
      contactNo,
      whatsapp,
      active,
    } = req.body;

    const user = await AdminUser.findById(req.params.userId);

    if (!user) {
      return res.status(404).json({
        status: 'error',
        message: 'User not found',
      });
    }

    if (username || email) {
      const duplicateQuery = {
        _id: { $ne: user._id },
        $or: [],
      };

      if (username) duplicateQuery.$or.push({ username });
      if (email) duplicateQuery.$or.push({ email });

      const existingUser = await AdminUser.findOne(duplicateQuery);
      if (existingUser) {
        return res.status(400).json({
          status: 'error',
          message: 'User with this email or username already exists',
        });
      }
    }

    if (user.role === ROLES.SUPER_ADMIN) {
      if (role && role !== ROLES.SUPER_ADMIN) {
        return res.status(403).json({
          status: 'error',
          message: 'Super admin role cannot be changed',
        });
      }

      if (active === false) {
        return res.status(403).json({
          status: 'error',
          message: 'Super admin access cannot be modified',
        });
      }
    }

    if (username !== undefined) user.username = username;
    if (email !== undefined) user.email = email;
    if (firstName !== undefined) user.firstName = firstName;
    if (lastName !== undefined) user.lastName = lastName;
    if (contactNo !== undefined) user.contactNo = contactNo;
    if (whatsapp !== undefined) user.whatsapp = whatsapp || undefined;
    if (country !== undefined) user.country = country;
    if (role !== undefined && user.role !== ROLES.SUPER_ADMIN) user.role = role;
    if (active !== undefined && user.role !== ROLES.SUPER_ADMIN) user.active = active;

    if (password) {
      user.password = password;
      user.passwordChangedAt = Date.now();
    }

    await user.save();

    const updatedUser = await AdminUser.findById(user._id)
      .select('-password -passwordChangedAt -passwordResetToken -passwordResetExpires');

    res.status(200).json({
      status: 'success',
      data: updatedUser,
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: error.message,
    });
  }
};

// Remove user
exports.removeUser = async (req, res) => {
  try {
    const user = await AdminUser.findById(req.params.userId);
    
    if (!user) {
      return res.status(404).json({
        status: 'error',
        message: 'User not found'
      });
    }

    // Prevent super-admin from being deleted
    if (user.role === 'super-admin') {
      return res.status(403).json({
        status: 'error',
        message: 'Super admin cannot be deleted'
      });
    }

    await AdminUser.findByIdAndDelete(req.params.userId);

    res.status(200).json({
      status: 'success',
      message: 'User deleted successfully'
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: error.message
    });
  }
}; 