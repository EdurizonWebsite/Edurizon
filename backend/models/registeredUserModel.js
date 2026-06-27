const mongoose = require('mongoose');


const documentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // e.g., "Aadhar Card", "Visa"
  },
  link: {
    type: String,
    required: false, // File URL or storage path
  },
  status: {
    type: String,
    enum: ['pending', 'uploaded', 'verified', 'rejected'],
    default: 'pending',
  },
  remark: {
    type: String,
    required: false,
  }
}, { _id: false });

const notificationSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId()
  },
  message: {
    type: String,
    required: true,
    trim: true,
  },
  sentAt: {
    type: Date,
    default: Date.now,
  },
  isRead: {
    type: Boolean,
    default: false,
  },
  senderId: {
    type: String,
    required: false,
  }
});

const userSchema = mongoose.Schema(
  {
    // Personal Details
    name: {
      type: String,
      required: true,
    },
    fatherName:{
      type:String,
      required:false
    },
    gender: {
      type: String,
      enum: ['male', 'female', 'other'],
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: false,
      unique: true, // Each phone number must be unique
    },
    password: {
      type: String,
      required: false,
    },
    dob: {
      type: Date,
      required: false,
    },
    address: {
        type: String,
        required: false,
    },
    // Finance Information - Structured Finance Map
    financeInfo: {
      feeStructureLink: {
        type: String,
        required: false,
        default: null
      },
      feeStructureGeneratedDate:{
        type:Date,
        required:false,
        default:null
      },
      feeStructureAgreed:{
        type:Boolean,
        required:false,
        default:false
      },
      oneTimeCharge: {
        type: Number,
        required: false,
        default: 0,
        min: 0
      },
      processingCharge: {
        type: Number,
        required: false,
        default: 0,
        min: 0
      },
      oneTimeChargePaid: {
        type: Number,
        required: false,
        default: 0,
        min: 0
      },
      otcCurrency: {
        type: String,
        required: false,
        default: 'USD'
      },
      processingCurrency: {
        type: String,
        required: false,
        default: 'INR'
      },
      inclusions: {
        visa: {
          type: Boolean,
          default: false
        },
        flightTickets: {
          type: Boolean,
          default: false
        },
        firstYearPackage: {
          type: Boolean,
          default: false
        }
      },
      bills: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'FinanceBill',
          required: true
        }
      ],
    },
    // Documents
    documents: {
      type: [documentSchema],
      default: [
        { name: 'Aadhar Card' },
        { name: 'Pancard' },
        { name: 'Visa' },
        { name: 'Result Certificate' },
        { name: 'Identity Proof' },
      ]
    },
    
    documentsUploadStatus:{
      type:String,
      enum: ['pending', 'completed'],
      default: 'pending'
    },

    // Academic Preferences
    studyDestination: {
      type: String,
      required: true,
    },
    intendedCourse: {
        type: String,
        required: true,
    },
    preferedUniversity:{
      type:String,
      required: false,
      default: 'None'
    },
    assignedCounsellor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'AdminUser',
      required: false,
    },
    assignedCounsellorName: {
      type: String,
      required: false,
    },
    scholarshipApplied:{
      type:String,
      required:false,
      default:'None'
    },
    enrolledUniversity:{
      type:Array,
      required:false,
      default:[]
    },
    enrolledCountry:{
      type:Array,
      required:false,
      default:[]
    },
    // Process Tracking
    applicationStage:{
        type: String,
        enum: ['Consultation', 'Document Upload', 'Document Verification', 'Selected University Application', 'Offer Letter', 'Visa Approval', 'Departure'],
        required: true,
        default: 'Consultation'
    },
    // Account Details
    lastLoginDate: {
      type: Date,
      required: false,
      default: Date.now,
    },
    accountStatus: {
        type: String,
        enum: ['active', 'inactive', 'suspended'],
        required: true,
        default: 'active',
    },
    notes:{
      type: String,
      required: false,
    },
    source:{
      type: String,
      required: false,
      default: 'Website'
    },
    notifications: {
      type: [notificationSchema],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const RegisteredStudent = mongoose.model('RegisteredStudent', userSchema);

module.exports = { RegisteredStudent };