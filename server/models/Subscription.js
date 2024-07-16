const mongoose = require('mongoose')
const User = require('./User')

const SubscriptionSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    serviceName: {
        type: String,
        required: true,
        trim: true
    },
    serviceType: {
        type: String,
        enum: ['Internet', 'Cable', 'Streaming', 'Phone', 'Other'],
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    billingCycle: {
        type: String,
        enum: ['Monthly', 'Quarterly', 'Yearly'],
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date
    },
    autoRenew: {
        type: Boolean,
        default: true
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
SubscriptionSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});


module.exports = mongoose.model('Subscription', SubscriptionSchema)