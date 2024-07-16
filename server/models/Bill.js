const mongoose = require('mongoose')
const User = require('./User')

const BillsSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    amount: {
        type: Number,
        required: true
    },
    dueDate: {
        type: Date,
        required: true
    },
    category: {
        type: String,
        enum: ['Rent', 'Utilities', 'Credit Card', 'Loan', 'Subscription', 'Other'],
        default: 'Other'
    },
    isPaid: {
        type: Boolean,
        default: false
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

})

BillsSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
  });

module.exports = mongoose.model('Bills', BillsSchema)