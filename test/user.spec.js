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

  test('user is automatically logged in upon first registration', (done) => {
    request(app).post('/api/users')
    .send({
      name: "Testname2",
      email: "email13@email.com",
      postcode: "NW1 1SD",
      password: "123456"
    })
    .then((response) => {
      expect(response.body.token).not.toBe(undefined);
      done();
    });
  });

  test('should return an error if new user fails to enter a name', (done) => {
    request(app).post('/api/users')
    .send({
      email: "email14@email.com",
      postcode: "NW5 1SD",
      password: "123456"
    })
    .then((response) => {
      expect(response.error.text.includes('Name is required')).toBe(true)
      done();
    });
  });

  test('should return an error if new user fails to enter a valid email', (done) => {
    request(app).post('/api/users')
    .send({
      name: "Testname",
      email: "blah",
      postcode: "NW5 1SD",
      password: "123456"
    })
    .then((response) => {
      expect(response.error.text.includes('Please include a valid email')).toBe(true)
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

  test('should return an error if user attempts to register twice with same email', (done) => {
    // request(app).post('/api/users')
    // .send({
    //   name: "Testname",
    //   email: "email12@email.com",
    //   postcode: "NW5 1SD",
    //   password: "123456"
    // })
    // .then((response) => {
    //   done();
    // });
    request(app).post('/api/users')
    .send({
      name: "Testname",
      email: "email12@email.com",
      postcode: "NW5 1SD",
      password: "123456"
    })
    .then((response) => {
      expect(response.error.text.includes('User already exists')).toBe(true)
      done();
    });
  });

  afterAll((done) => {
    mongoose.connection.db.dropDatabase(done);
    mongoose.connection.close()

  });
});
