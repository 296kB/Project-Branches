const express = require('express')
const router = express.Router()
const dashController = require('../controllers/dashboard')
const authMiddleware = require('../middleware/auth')

// router.get('/', dashController.getDash)
// router.post('/postproject', dashController.postProject)
// router.delete('/delete', dashController.deleteProject)

module.exports = router