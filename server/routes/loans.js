const express = require('express')
const router = express.Router()
const Loans = require('../models/Loan')
const { ensureAuth } = require('../middleware/auth')


// @desc Add New Loans 
// @route POST /loans
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


// @desc Get All Loans
// @route GET /Loans
router.get('/loans', ensureAuth, async (res, req) => {
    try {
        const userId = req.user.id
        const allLoans = await Loans.find({ userId })
           .populate('user')
           .sort({ creatAt: 'desc' })
           .lean()
        res.status(200).json(allLoans)
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: "Server Error"})
    }
})

// @desc Partially modify bills
// @route PUT /bills
router.patch('/loan:id', ensureAuth, async (res, req) => {
    try {
        const userId = req.user.id;
        const loanId = req.params.id;
        const updateData = req.body;

        //Find the loan by ID and ensure it belongs to the authenticated user
        const loan = await Loans.findOneAndUpdate(
            { _id: loanId, userId },
            { $set: updateData },
            { new: true, runValidators: true }
        ).lean();

        if (!loan) {
            return res.status(404).json({ error: "Loan Not Found" })
        }
    
        res.status(200).json(loan)
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: "Server Error"})
    }
})

// @desc Delete a Loan
// @route DELETE /loan:id
router.delete('/loan:id', ensureAuth, async (req, res) => {
    try {
      const userId = req.user.id;
      const loanId = req.params.id;
  
      // Find and delete the bill by ID and ensure it belongs to the authenticated user
      const loan = await Loan.findOneAndDelete({ _id: loanId, userId });
  
      if (!loan) {
        return res.status(404).json({ error: 'loan not found' });
      }
  
      res.status(200).json({ message: 'Loan deleted successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router