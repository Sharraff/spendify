const mongoose = require('mongoose')
const User = require('./User')

const LoanSchema = new mongoose.Schema({
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    lender: {
      type: String,
      required: true,
      trim: true
    },
    principalAmount: {
      type: Number,
      required: true
    },
    interestRate: {
      type: Number,
      required: true
    },
    startDate: {
      type: Date,
      required: true
    },
    endDate: {
      type: Date,
      required: true
    },
    monthlyPayment: {
      type: Number,
      required: true
    },
    remainingBalance: {
      type: Number,
      required: true
    },
    status: {
      type: String,
      enum: ['Active', 'Paid Off', 'Defaulted'],
      default: 'Active'
    },
    notes: {
      type: String,
      trim: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    updatedAt: {
      type: Date,
      default: Date.now
    }
});
  
// Pre-save middleware to update the `updatedAt` field
LoanSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

module.exports = mongoose.model('loan', LoanSchema)