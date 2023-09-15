const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const path = require('path')
const app = express()
const port = 5000

// Config path static file
app.use(express.static(path.join(__dirname, 'public')))

// Watch log on server 
app.use(morgan('combined'))

// Template engine
app.engine('hbs', handlebars.engine({
  extname: 'hbs'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resource/views'))
app.get('/', (req, res) => {
  res.render('home')
})
app.get('/news', (req, res) => {
  res.render('news')
})
// Define route
// app.get('/', (req, res) => {
//   res.send(`<h1 style="color:aqua;">Welcome to my World!</h1>`)
// })
// app.get('/blog', (req, res) => {
//   res.send('Welcome to my blogs!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
