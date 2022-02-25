/* eslint-disable no-undef */
const express = require('express')
const bodyParser = require("body-parser");
const auth = require('./src/domain/auth')
const { books, characters }= require('./src/domain/usecases')

const app = express()

const PORT = process.env.PORT || 8080

app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true} ))

app.use(auth)
app.use(characters)
app.use(books)

app.get('/', (req, res) => {
  res.send('hello world!!')
})

app.listen(PORT, () => console.log('express listening with stability'))