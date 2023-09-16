
const express = require('express')
const router = express.Router()
const blogsController = require('../app/controllers/BlogsController')

router.use('/:slug', blogsController.show)
// Always place the '/' at the end 
router.use('/', blogsController.index)

module.exports = router
