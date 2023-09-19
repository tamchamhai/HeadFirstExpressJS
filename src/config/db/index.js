const mongoose = require('mongoose')

async function connect() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/phofullstack_dev')
    console.log('Connect db successfully!!!')
  } catch (error) {
    console.log('Connect db failure!!!')
  }
}

module.exports = { connect }
