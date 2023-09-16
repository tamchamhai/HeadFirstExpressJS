class BlogsController {
  index(req, res) {
    res.render('blogs')
  }

  show(req, res) {
    res.send("This is the first blog!!!")
  }
}

module.exports = new BlogsController