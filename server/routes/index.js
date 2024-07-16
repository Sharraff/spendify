const express = require('express')
const router = express.Router()
const { ensureAuth, ensureGuest } = require('../middleware/auth')


// @desc Landing page
// @route Get /
router.get('/', ensureGuest, (req, res) => {
    res.send('landing page')
})

// @desc Login page
// @route Get /login
router.get('/', ensureGuest, (req, res) => {
    res.send('login page')
})

// @desc Home
// @route GET /home
router.get('/home', ensureAuth, async (req, res) => {
    try {
        //const stories = await Story.find({ user: req.user.id })
        res.send('Home')
    } catch (err) {
     console.error(err)   
    }
    res.send('Home')
})

module.exports = router