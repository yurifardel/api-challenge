const mongoose = require('../mongoose')
require('dotenv').config()

describe('Mongo helper', () => {
  beforeAll(async () => {
    await mongoose.connect('mongodb://0.0.0.0:27017/mobix')
  })
  test('should connect mongodb', () => {
    expect(mongoose).toBeTruthy()

  })
})