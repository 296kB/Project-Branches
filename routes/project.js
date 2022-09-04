const express = require('express')
const router = express.Router()
const dashController = require('../controllers/dashboard')
const projectController = require('../controllers/project')
const {ensureAuth, ensureGuest} = require('../middleware/auth')

router.post('/createProject', projectController.createProject)
// router.delete('/delete', dashController.deleteProject)

module.exports = router