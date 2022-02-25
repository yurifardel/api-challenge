const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/mobix', {
  useNewUrlParser: true, 
  useUnifiedTopology: true
  
}, () => {
  console.log('Mongodb database connection established successfully')
})

mongoose.Promise = global.Promise

module.exports = mongoose