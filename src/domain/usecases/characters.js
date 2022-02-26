const { Router } = require('express')
const { DetailsCharacters } = require('../../infra/model')

const route = Router()


route.get('/characters', async  (req, res, next) => {
  const characters = await DetailsCharacters.find()

  return res.send({ characters })
})

module.exports = route