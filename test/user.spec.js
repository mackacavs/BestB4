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
    request(app).post('/api/users')
      .send({
        name: "Testname",
        email: "email12@email.com",
        postcode: "NW5 1SD",
        password: "123456"
      })
      .then((response) => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test('should return an error if new user fails to enter a password', (done) => {
   request(app).post('/api/users')
     .send({
       name: "Testname",
       email: "email12@email.com",
       postcode: "NW5 1SD",
     })
     .then((response) => {
       expect(response.error.text.includes("Please enter a password with 6 or more characters")).toBe(true)
       done();
     });
 });

  afterAll((done) => {
    mongoose.connection.db.dropDatabase(done);
    mongoose.connection.close()

  });
});
