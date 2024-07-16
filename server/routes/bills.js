const express = require('express')
const router = express.Router()
const Bills = require('../models/Bill')
const { ensureAuth } = require('../middleware/auth')


// @desc Add New Bills 
// @route POST /bills
router.post('/', ensureAuth, async (res, req) => { 
    try {
        req.body.user = req.user.id
        await Bills.create(req.body)
        // res.redirect('/home')
        res.send('bills')
    } catch (err) {
        console.log(err);
    }
})


// @desc Get All Bills
// @route GET /bills
router.get('/bills', ensureAuth, async (res, req) => {
    try {
        const userId = req.user.id
        const allBills = await Bills.find({ userId })
           .populate('user')
           .sort({ creatAt: 'desc' })
           .lean()
        res.status(200).json(allBills)
        res.status(200).send('BILLS BITCH !!!')
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: "Server Error"})
    }
})

// @desc Get a single Bill
// @route GET /bill
router.get('/bill:id', ensureAuth, async (res, req) => {
    const userId = req.user.id
    
    try {
        const oneBill = await Bills.fineOne({ userId }).lean()
        res.status(200).json(oneBill)
    } catch (err) {
        console.log(err)
        console.error(err)
        res.status(500).json({ error: "Server Error "})
    }
})

// @desc Partially modify bills
// @route PUT /bills
router.patch('/bill:id', ensureAuth, async (res, req) => {
    try {
        const userId = req.user.id;
        const billId = req.params.id;
        const updateData = req.body;

        //Find the bil by ID and ensure it belongs to the authenticated user
        const bill = await Bills.findOneAndUpdate(
            { _id: billId, userId },
            { $set: updateData },
            { new: true, runValidators: true }
        ).lean();

        if (!bill) {
            return res.status(404).json({ error: "Bill Not Found" })
        }
    
        res.status(200).json(bill)
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: "Server Error"})
    }
})

// @desc Delete a Bill
// @route DELETE /bill:id
router.delete('/bill:id', ensureAuth, async (req, res) => {
    try {
      const userId = req.user.id;
      const billId = req.params.id;
  
      // Find and delete the bill by ID and ensure it belongs to the authenticated user
      const bill = await Bill.findOneAndDelete({ _id: billId, userId });
  
      if (!bill) {
        return res.status(404).json({ error: 'Bill not found' });
      }
  
      res.status(200).json({ message: 'Bill deleted successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router