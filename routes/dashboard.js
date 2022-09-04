const express = require('express')
const router = express.Router()
const dashController = require('../controllers/dashboard')
const projController = require('../controllers/project')
const authMiddleware = require('../middleware/auth')

router.get('/', dashController.getProjects)
router.post('/postProject', projController.createProject)
router.get('/project', projController.getProject)

module.exports = router