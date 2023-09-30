
const express = require('express')
const router = express.Router()
const blogsController = require('../app/controllers/BlogsController')

router.post('/store', blogsController.store)
router.post('/handle-form-actions', blogsController.handleFormActions)
router.get('/create-blog', blogsController.createBlog)
router.get('/:id/edit', blogsController.editBlog)
router.put('/:id/update', blogsController.updateBlog)
router.delete('/:id/force', blogsController.forceDeleteBlog)
router.patch('/:id/restore', blogsController.blogRestore)
router.get('/:slug', blogsController.blogDetail)
router.delete('/:id', blogsController.deleteBlog)
// Always place the '/' at the end 
router.use('/', blogsController.index)

module.exports = router
