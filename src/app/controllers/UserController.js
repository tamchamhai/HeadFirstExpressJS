const Blog = require('../models/Blog')
const mongooseHelper = require('../../utils/mongoose')

class UserController {
  // [GET] /news
  blogManage(req, res, next) {
    Blog.countDocumentsDeleted()
      .then((count) => {
        console.log(count)
      })
      .catch(next)
    Blog.find({})
      .then((blogs) =>
        res.render('user/storedBlog', {
          blog: mongooseHelper.multipleMongooseToObject(blogs),
        })
      )
      .catch(next)
  }

  blogTrash(req, res, next) {
    Blog.findDeleted({})
      .then((blogs) =>
        res.render('user/trashBlog', {
          blog: mongooseHelper
            .multipleMongooseToObject(blogs)
            .filter((blog) => blog.deleted),
        })
      )
      .catch(next)
  }
}

module.exports = new UserController()
