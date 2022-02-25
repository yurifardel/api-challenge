const { Router } = require("express")
const { booksCollection } = require("../../data/model")

const route = Router()

route.get("/books/:id", async (req, res, next) => {
  const { id } = req.params
  let bookList = []
  const books = await booksCollection.find({ id_character: id })
  books.map((item) => {
    item.books.map((items) => bookList.push(items))
  })

  next()
  return res.send({
    id_character: id,
    books: bookList,
  })
})

module.exports = route