const mongoose = require('../mongoose')

const BooksSchema = new mongoose.Schema({
  id_character: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'details-characters',
    required: true
  },
  books: {
    type: [String]
  },
  isbn: {
    type: String
  }
  
})

const booksCollection = mongoose.model('books', BooksSchema) 

module.exports = booksCollection