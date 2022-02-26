const mongoose = require('../mongoose')
require('dotenv').config()

describe('Mongo helper', () => {
  beforeAll(async () => {
    await mongoose.connect('mongodb://localhost:27017/mobix')
  })
  test('should connect mongodb', () => {
    expect(mongoose).toBeTruthy()

  })
})