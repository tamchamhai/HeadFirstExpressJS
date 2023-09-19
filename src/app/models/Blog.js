const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Blog = new Schema({
  name: { type: String },
  description: { type: String },
  content: { type: String, minLength: 255 },
  created: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Blog', Blog)
