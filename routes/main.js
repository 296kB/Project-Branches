const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')
const authMiddleware = require('../middleware/auth')

router.get('/', homeController.getIndex)
router.get('/signup', homeController.getSignup)


module.exports = router