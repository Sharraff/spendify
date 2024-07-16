const mongoose = require('mongoose');
const User = require('./User');

const InvestmentSchema = new mongoose.Schema({
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    type: {
      type: String,
      enum: ['Stock', 'Bond', 'Mutual Fund', 'Real Estate', 'Cryptocurrency', 'Other'],
      required: true
    },
    name: {
      type: String,
      required: true,
      trim: true
    },
    amountInvested: {
      type: Number,
      required: true
    },
    currentValue: {
      type: Number,
      required: true
    },
    purchaseDate: {
      type: Date,
      required: true
    },
    gainPercentage: {
        type: Number,
        default: 0
    },
    lossPercentage: {
        type: Number,
        default: 0
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
  
// Pre-save middleware to update the `gainPercentage` and `lossPercentage` fields
InvestmentSchema.pre('save', function (next) {
  const investment = this;
  const difference = investment.currentValue - investment.amountInvested;
  const percentageChange = (difference / investment.amountInvested) * 100;
  
  if (percentageChange >= 0) {
    investment.gainPercentage = percentageChange;
    investment.lossPercentage = 0;
  } else {
    investment.lossPercentage = Math.abs(percentageChange);
    investment.gainPercentage = 0;
  }
  
  investment.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Investment', InvestmentSchema)