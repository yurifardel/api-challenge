const mongoose = require('mongoose')
const path = require('path');
require('dotenv').config()


mongoose.connect('mongodb://0.0.0.0:27017/mobix', {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})

mongoose.Promise = global.Promise

module.exports = mongoose