const express = require('express')
const router = express.Router()
const Investment = require('../models/Investment')
const { ensureAuth } = require('../middleware/auth')


// @desc Add New Investment 
// @route POST /investment
router.post('/', ensureAuth, async (res, req) => { 
    try {
        req.body.user = req.user.id
        await Investment.create(req.body)
        // res.redirect('/home')
        res.send('investment')
    } catch (err) {
        console.log(err);
    }
})


// @desc Get All Investment
// @route GET /investment
router.get('/investment', ensureAuth, async (res, req) => {
    try {
        const userId = req.user.id
        const allInvestment = await Investment.find({ userId })
           .populate('user')
           .sort({ creatAt: 'desc' })
           .lean()
        res.status(200).json(allInvestment)
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: "Server Error"})
    }
})

// @desc Partially Modify Investment
// @route PUT /investment
router.patch('/investment:id', ensureAuth, async (res, req) => {
    try {
        const userId = req.user.id;
        const investmentId = req.params.id;
        const updateData = req.body;

        //Find the investment by ID and ensure it belongs to the authenticated user
        const investment = await Investment.findOneAndUpdate(
            { _id: investmentId, userId },
            { $set: updateData },
            { new: true, runValidators: true }
        ).lean();

        if (!investment) {
            return res.status(404).json({ error: "Investment Not Found" })
        }
    
        res.status(200).json(investment)
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: "Server Error"})
    }
})

// @desc Delete an Investment
// @route DELETE /investment:id
router.delete('/investment:id', ensureAuth, async (req, res) => {
    try {
      const userId = req.user.id;
      const investmentId = req.params.id;
  
      // Find and delete the investment by ID and ensure it belongs to the authenticated user
      const bill = await Bill.findOneAndDelete({ _id: investmentId, userId });
  
      if (!investment) {
        return res.status(404).json({ error: 'investment not found' });
      }
  
      res.status(200).json({ message: 'Investment deleted successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router