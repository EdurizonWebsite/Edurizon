const mongoose = require('mongoose');

const { Schema } = mongoose;



const financeBillSchema = new Schema(
  {
    studentId: {
      type: Schema.Types.ObjectId,
      ref: 'RegisteredStudent',
      required: true,
    },
    studentName: {
      type: String,
      required: true,
    },
    issueDate: {
      type: Date,
      default: Date.now,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    amountDue: {
      type: Number,
      required: true,
      min: 0,
    },
    amountPaid: {
      type: Number,
      default: 0,
      min: 0,
    },
    accountName:{
      type:String,
      required:false,
      default:'Edurizon'
    },
    paymentMode:{
      type:String,
      required:false,
      default:"Online mode"
    },
    purpose: {
      type: ['Processing Fee', 'One Time Charge'],
      required: true,
      trim: true,
    },
    issuedBy: {
      type: Schema.Types.ObjectId,
      ref: 'AdminUser',
      required: true,
    },
    url:{
      type: String,
      default: null,
    },
    currency: {
      type: String,
      default: null,
    }
  },
  {
    timestamps: true,
  }
);



const FinanceBill = mongoose.model('FinanceBill', financeBillSchema);

module.exports = FinanceBill;


