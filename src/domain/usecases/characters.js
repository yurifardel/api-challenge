const { Router } = require('express')
const { DetailsCharacters } = require('../../data/model')

const route = Router()

route.get('/characters', async (req, res) => {
  const characters = await DetailsCharacters.find()

  return res.json({ characters })
})

module.exports = route