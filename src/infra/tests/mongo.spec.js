const mongoose = require('../mongoose')
require('dotenv').config()

describe('Mongo helper', () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URL)
  })
  test('should connect mongodb', () => {
    expect(mongoose).toBeTruthy()

  })
})