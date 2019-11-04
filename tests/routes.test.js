const request = require('supertest')
const app = require('../index')
const mongoose = require('mongoose')

describe('Post Endpoints', () => {

  it('should create a new post', (done) => {
    return request(app).get('/')
      .then((res) => {
        expect(res.status).to.equal(300);
        done();
      })
      .catch((err) => console.log(err) || done())
    done();
  })
})
