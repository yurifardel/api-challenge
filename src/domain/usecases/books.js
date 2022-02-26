const { Router } = require("express")
const { booksCollection } = require("../../infra/model")
const imageToBase64 = require("image-to-base64")
const route = Router()

route.get("/books/:id", async (req, res, next) => {
  const { id } = req.params
  let bookList = []
  let isbnList = []
  let img64list = []
  const books = await booksCollection.find({ id_character: id })
  books.map(async (item) => {
    item.books.map((items) => bookList.push(items))
    isbnList.push(item.isbn)
  })

  for (let value of isbnList) {
    const img = await imageToBase64(
      `https://covers.openlibrary.org/b/isbn/${value}-S.jpg`
    )

    img64list.push(img)
  }

  return res.send({
    id_character: id,
    books: bookList,
    covers: img64list,
  })
})

module.exports = route