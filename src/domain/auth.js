const { Router } = require("express")
const request = require("request")
const {ApiLinks, DetailsCharacters, booksCollection} = require("../data/model")
const route = Router()

route.get("/auth/api", async (req, res) => {
  try {
    request(
      "https://anapioficeandfire.com/api/books/",
      async (err, response, body) => {
        if (err) {
          console.log(err)
        }
        if (!response) {
          return res.json({ error: "Does not have an answer" })
        }

        let listApiCharacters = []
        const bodyParse = JSON.parse(body)

        bodyParse.map((item) => {
          item.povCharacters.map((items) => listApiCharacters.push(items))
        })

        const QUERY = await ApiLinks.find()

        if (QUERY) {
          return res.json({ info: "not allowed, collection already created" })
        }

        await ApiLinks.create({
          apis: listApiCharacters,
        })
      }
    )
  } catch (error) {
    console.log(error)
  }
})

route.get("/auth/api/details", async (req, res) => {
  try {
    const [links] = await ApiLinks.find()
    links.apis.map((item) => {
      request(item, async (err, response, body) => {
        const details = JSON.parse(body)
        await DetailsCharacters.create({
          name: details.name,
          gender: details.gender,
          culture: details.culture,
          titles: details.titles,
          aliases: details.aliases,
          apiBooks: details.books,
        })
      })
    })
    return res.json({success: 200})
  } catch (error) {
    console.log(error)
  }
})

route.get("/auth/api/books", async (req, res) => {
  try {
    const booksReq = await DetailsCharacters.find().select("apiBooks")
    
   

    booksReq.map((item) => {
      item.apiBooks.map((items) => {
        request(items, async (err, response, body) => {
          const books = JSON.parse(body)

          await booksCollection.create({
            id_character: item._id,
            books: books.name,
            isbn: books.isbn
          })
        })
      })
    })

    return res.json({ success: 200 })
  } catch (error) {
    console.log()
  }
})

module.exports = route