module.exports = {
  multipleMongooseToObject: (arr) => {
    return arr.map(mongoose => mongoose.toObject())
  },

  mongooseToObject: (mongoose) => {
    return mongoose.toObject()
  }
}