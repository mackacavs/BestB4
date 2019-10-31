const request = require('supertest')
const app = require('../index')
const mongoose = require('mongoose')

describe('Post Endpoints', () => {

  it('should create a new post', async () => {
    const res = await request(app)
      .post('http://localhost:5000/api/posts')
      .send({
        description: 'hello',
        title: 'asd',
      })
    expect(res.statusCode).toEqual(201)
    expect(res.body).toHaveProperty('post')
  })
})
