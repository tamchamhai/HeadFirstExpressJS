const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const path = require('path')
const app = express()
const port = 5000
const route = require('./routes/index')
const db = require('./config/db')
const methodOverride = require('method-override')

// Connect db
db.connect()

// Config path static file
app.use(express.static(path.join(__dirname, 'public')))
// Middleware handle form data
app.use(
  express.urlencoded({
    extended: true,
  })
)
// Middleware handle data request from XML, axios, fetch.
app.use(express.json())
app.use(methodOverride('_method'))

// Watch log on server
app.use(morgan('combined'))

// Template engine
app.engine(
  'hbs',
  handlebars.engine({
    extname: 'hbs',
    helpers: {
      sum: (a, b) => a + b,
    },
  })
)
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resource/views'))

// Route initial
route(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
