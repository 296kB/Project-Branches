const express = require('express')
const router = express.Router()
const dashController = require('../controllers/dashboard')
const projectController = require('../controllers/project')
const {ensureAuth, ensureGuest} = require('../middleware/auth')


router.get('/', ensureAuth, dashController.getDash)
router.get('/addProject', dashController.addProject)
// router.post('/postProject', dashController.postProject)
// router.delete('/delete', dashController.deleteProject)

module.exports = router