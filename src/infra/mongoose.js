const mongoose = require('mongoose')
require('dotenv').config()


mongoose.connect('mongodb://localhost:27017/mobix', {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})

mongoose.Promise = global.Promise

module.exports = mongoose