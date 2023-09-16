const newsRouter = require('./news') 
const blogsRouter = require('./blogs')
const siteRouter = require('./site')

function route(app) {
  // Define route
  app.use('/news', newsRouter)

  app.use('/blogs', blogsRouter)

  app.use('/', siteRouter)
}

module.exports = route;
