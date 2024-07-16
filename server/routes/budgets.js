const express = require('express')
const router = express.Router()
const Budget = require('../models/Budget')
const { ensureAuth } = require('../middleware/auth')


// @desc Add New Budgets 
// @route POST /budget
router.post('/', ensureAuth, async (res, req) => { 
    try {
        req.body.user = req.user.id
        await Budget.create(req.body)
        // res.redirect('/home')
        res.send('budget')
    } catch (err) {
        console.log(err);
    }
})


// @desc Get All Budget
// @route GET /budget
router.get('/budgets', ensureAuth, async (res, req) => {
    try {
        const userId = req.user.id
        const allBudgets = await Budget.find({ userId })
           .populate('user')
           .sort({ creatAt: 'desc' })
           .lean()
        res.status(200).json(allBudgets)
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: "Server Error"})
    }
})

// @desc Partially modify budget
// @route PUT /bills
router.patch('/budget:id', ensureAuth, async (res, req) => {
    try {
        const userId = req.user.id;
        const budgetId = req.params.id;
        const updateData = req.body;

        //Find the budget by ID and ensure it belongs to the authenticated user
        const budget = await Budget.findOneAndUpdate(
            { _id: budgetId, userId },
            { $set: updateData },
            { new: true, runValidators: true }
        ).lean();

        if (!bill) {
            return res.status(404).json({ error: "Budget Not Found" })
        }
    
        res.status(200).json(budget)
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: "Server Error"})
    }
})

// @desc Delete a Budget
// @route DELETE /budget:id
router.delete('/budget:id', ensureAuth, async (req, res) => {
    try {
      const userId = req.user.id;
      const budgetId = req.params.id;
  
      // Find and delete the budget by ID and ensure it belongs to the authenticated user
      const budget = await Budget.findOneAndDelete({ _id: budgetId, userId });
  
      if (!budget) {
        return res.status(404).json({ error: 'Budget not found' });
      }
  
      res.status(200).json({ message: 'Budget deleted successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router