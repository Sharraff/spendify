const mongoose = require('mongoose')
const User = require('./User')

const BudgetSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    totalAmount: {
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
    categories: [
        {
            category: {
                type: String,
                enum: ['Rent', 'Utilities', 'Credit Card', 'Loan', 'Subscription', 'Other'],
                default: 'Other'
            },
            allocatedAmount: {
                type: Number,
                required: true
            },
            spentAmount: {
                type: Number,
                default: 0
            }
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
      },
    updatedAt: {
        type: Date,
        default: Date.now
    }
})

BudgetSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});
  

module.exports = mongoose.model('Budget', BudgetSchema)