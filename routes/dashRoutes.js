const express = require('express')
const router = express.Router()
const dashController = require('../controllers/home')
const authMiddleware = require('../middleware/auth')

router.get('/', dashController.getDash)