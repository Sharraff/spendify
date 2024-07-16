const express = require('express')
const router = express.Router()
const Subscription = require('../models/Subscription')
const { ensureAuth } = require('../middleware/auth')


// @desc Add New Subscription 
// @route POST /subscription
router.post('/', ensureAuth, async (res, req) => { 
    try {
        req.body.user = req.user.id
        await Loans.create(req.body)
        // res.redirect('/home')
        res.send('Loans')
    } catch (err) {
        console.log(err);
    }
})


// @desc Get All Subscription
// @route GET /subcription
router.get('/subscription', ensureAuth, async (res, req) => {
    try {
        const userId = req.user.id
        const allSubscription = await Subscription.find({ userId })
           .populate('user')
           .sort({ creatAt: 'desc' })
           .lean()
        res.status(200).json(allSubscription)
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: "Server Error"})
    }
})

// @desc Partially Modify Subscription
// @route PUT /subscription
router.patch('/subscription:id', ensureAuth, async (res, req) => {
    try {
        const userId = req.user.id;
        const subscriptionId = req.params.id;
        const updateData = req.body;

        //Find the subscription by ID and ensure it belongs to the authenticated user
        const loan = await Subscription.findOneAndUpdate(
            { _id: subscriptionId, userId },
            { $set: updateData },
            { new: true, runValidators: true }
        ).lean();

        if (!subscription) {
            return res.status(404).json({ error: "Loan Not Found" })
        }
    
        res.status(200).json(subscription)
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: "Server Error"})
    }
})

// @desc Delete a Subscription
// @route DELETE /subscription:id
router.delete('/subscription:id', ensureAuth, async (req, res) => {
    try {
      const userId = req.user.id;
      const subscriptionId = req.params.id;
  
      // Find and delete the subscription by ID and ensure it belongs to the authenticated user
      const subscription = await Subscription.findOneAndDelete({ _id: subscriptionId, userId });
  
      if (!subscription) {
        return res.status(404).json({ error: 'Bill not found' });
      }
  
      res.status(200).json({ message: 'Subscription deleted successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router