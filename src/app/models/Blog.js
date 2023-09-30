const mongoose = require('mongoose')
const Schema = mongoose.Schema
const mongooseDelete = require('mongoose-delete')

const Blog = new Schema(
  {
    name: { type: String },
    slug: { type: String, unique: true },
    description: { type: String },
    content: { type: String },
  },
  {
    timestamps: true,
  }
)

// Add plugin
Blog.plugin(mongooseDelete, { overrideMethods: 'all', deletedAt: true })

module.exports = mongoose.model('Blog', Blog)
