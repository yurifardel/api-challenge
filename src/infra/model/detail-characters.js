const mongoose = require('../mongoose')

const DetailsCharactersSchema = new mongoose.Schema({
  name: {
    type: String
  },
  gender: {
    type: String
  },
  culture: {
    type: String
  },
  titles: {
    type: [String]
  },
  aliases: {
    type: [String]
  },
  apiBooks: {
    type: [String]
  }

})

const DetailsCharacters = mongoose.model("details-characters", DetailsCharactersSchema)
module.exports = DetailsCharacters