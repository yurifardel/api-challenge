const mongoose = require('mongoose')
const path = require('path');
require('dotenv').config()

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})

mongoose.Promise = global.Promise

module.exports = mongoose