const newsRouter = require('./news')
const blogsRouter = require('./blogs')
const userRouter = require('./user')
const siteRouter = require('./site')

function route(app) {
  // Define route
  app.use('/news', newsRouter)
  app.use('/user', userRouter)
  app.use('/blogs', blogsRouter)
  app.use('/', siteRouter)
}

module.exports = route
