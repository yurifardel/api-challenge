const mongoose = require('../mongoose')

const ApiLinkSchema = new mongoose.Schema({
  apis: {
    type: [String],
    ref: "links"
  }

})

const ApiLinks = mongoose.model("api-Links", ApiLinkSchema)
module.exports = ApiLinks