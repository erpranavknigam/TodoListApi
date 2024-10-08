const express = require('express')
const auth = require('../controllers/authController')

const router = express.Router()

router.post('/register', auth.registerUser)
router.post('/login',auth.loginUser)

module.exports = router