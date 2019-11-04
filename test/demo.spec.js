const request = require('supertest');
const app = require('../index');
const mongoose = require('mongoose');

describe('Test the root path', () => {

  // beforeAll(() => {
  //   mongoose.connect('mongodb://localhost/testDatabase', {
  //     useNewUrlParser: true,
  //     useUnifiedTopology: true,
  //     useFindAndModify: false
  //   })
  // });

  test('It should respond to the GET method', (done) => {
    request(app).get('/').then((response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
    // done();

  });

  afterAll((done) => {
    mongoose.connection.db.dropDatabase(done);
    mongoose.connection.close()


  });
});
