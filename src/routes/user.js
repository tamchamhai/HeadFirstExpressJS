
const express = require('express')
const router = express.Router()
const userController = require('../app/controllers/UserController')

// Always place the '/' at the end 
router.get('/stored-blog', userController.blogManage)
router.get('/blogs/trash', userController.blogTrash)

module.exports = router
