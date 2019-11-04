const request = require('supertest');
const app = require('../index');
const mongoose = require('mongoose');

describe('User is registered', () => {

  // beforeAll(() => {
  //   mongoose.connect('mongodb://localhost/testDatabase', {
  //     useNewUrlParser: true,
  //     useUnifiedTopology: true,
  //     useFindAndModify: false
  //   })
  // });
  test('should create a new user', (done) => {
    console.log("helloe")
    request(app).post('/api/users')
      .send({
        name: "Testname",
        email: "email12@email.com",
        password: "123456"
      })
      .then((response) => {
        console.log(response.statusCode)
        console.log("I'm here")
        expect(response.statusCode).toBe(500);
        done();
      });
  });

  afterAll((done) => {
    mongoose.connection.db.dropDatabase(done);
    mongoose.connection.close()

  });
});
