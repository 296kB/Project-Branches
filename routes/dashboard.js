const express = require('express')
const router = express.Router()
const dashController = require('../controllers/dashboard')
const projController = require('../controllers/project')
const authMiddleware = require('../middleware/auth')


router.get('/', dashController.getDash)
// router.post('/postProject', dashController.postProject)
// router.delete('/delete', dashController.deleteProject)

module.exports = router