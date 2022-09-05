const express = require('express')
const router = express.Router()
const dashController = require('../controllers/dashboard')
const projectController = require('../controllers/project')
const {ensureAuth, ensureGuest} = require('../middleware/auth')

router.post('/addProject', projectController.addProject)
// router.delete('/delete', dashController.deleteProject)

module.exports = router