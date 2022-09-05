const express = require('express')
const router = express.Router()
const projController = require('../controllers/project')

// router.get('/project', projController.getProject)

// router.post('/markIncomplete', projController.markIncomplete)
router.delete('/projectDelete', projController.deleteProject)


module.exports = router