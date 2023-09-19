const Blog = require('../models/Blog')
const mongooseHelper = require('../../utils/mongoose')

class BlogsController {
  async index(req, res, next) {
    // next is a function
    await Blog.find({})
      .then((blogs) => {
        res.render('blogs', {
          blogs: mongooseHelper.multipleMongooseToObject(blogs),
        })
      })
      .catch(next)
  }

  show(req, res) {
    res.send('This is the first blog!!!')
  }
}

module.exports = new BlogsController()
