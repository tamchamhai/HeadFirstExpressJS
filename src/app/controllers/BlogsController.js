const Blog = require('../models/Blog')
const mongooseHelper = require('../../utils/mongoose')

class BlogsController {
  index(req, res, next) {
    // next is a function
    Blog.find({})
      .then((blogs) => {
        res.render('blogs', {
          blogs: mongooseHelper.multipleMongooseToObject(blogs),
        })
      })
      .catch(next)
  }

  blogDetail(req, res, next) {
    Blog.findOne({ slug: req.params.slug })
      .then((blog) => {
        res.render('blogs/detail', {
          blog: mongooseHelper.mongooseToObject(blog),
        })
      })
      .catch(next)
  }

  // Get data detail /blogs/:id/edit
  editBlog(req, res, next) {
    Blog.findById(req.params.id)
      .then((blog) => {
        res.render('blogs/editBlog', {
          blog: mongooseHelper.mongooseToObject(blog),
        })
      })
      .catch(next)
  }

  // Update data detail /blogs/:id/update
  updateBlog(req, res, next) {
    Blog.updateOne({ _id: req.params.id }, req.body)
      .then((blog) => {
        res.redirect('/user/stored-blog')
      })
      .catch(next)
  }

  // Delete data detail /blogs/:id/delete
  deleteBlog(req, res, next) {
    Blog.delete({ _id: req.params.id })
      .then(() => {
        res.redirect('back')
      })
      .catch(next)
  }

  // /blogs/:id/forceDelete
  forceDeleteBlog(req, res, next) {
    Blog.deleteOne({ _id: req.params.id })
      .then(() => {
        res.redirect('back')
      })
      .catch(next)
  }

  createBlog(req, res, next) {
    res.render('blogs/createBlog')
  }

  // [POST]
  store(req, res, next) {
    const blog = new Blog(req.body)
    blog
      .save()
      .then((response) => {
        res.redirect('/blogs')
      })
      .catch(next)
  }

  blogRestore(req, res, next) {
    Blog.restore({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next)
  }

  // [POST] /blogs/handle-form-actions
  handleFormActions(req, res, next) {
    switch (req.body.action) {
      case 'delete':
        Blog.delete({_id: {$in: req.body.blogIds}})
          .then(() => res.redirect('back'))     
          .catch(next)
        break;
      default:
        res.json(req.body)
    }
  }
}

module.exports = new BlogsController()
