const request = require('supertest');
const app = require('../index');
const mongoose = require('mongoose');

// async
function removeAllCollections () {
  const collections = Object.keys(mongoose.connection.collections)
  for (const collectionName of collections) {
    const collection = mongoose.connection.collections[collectionName]
    // await
    collection.deleteMany()
  }
}

describe('User is registered', () => {

  // beforeEach(() => {
  //   mongoose.connect('mongodb://localhost/testDatabase', {
  //     useNewUrlParser: true,
  //     useUnifiedTopology: true,
  //     useFindAndModify: false
  //   })
  // });

  beforeEach(function(done) {
    /*
      Define clearDB function that will loop through all
      the collections in our mongoose connection and drop them.
    */
    function clearDB() {
      for (var i in mongoose.connection.collections) {
        mongoose.connection.collections[i].remove(function() {});
      }
      return done();
    }

    /*
      If the mongoose connection is closed,
      start it up using the test url and database name
      provided by the node runtime ENV
    */
    if (mongoose.connection.readyState === 0) {
      mongoose.connect(
        `mongodb://localhost:27017/${process.env.TEST_SUITE}`, // <------- IMPORTANT
        function(err) {
          if (err) {
            throw err;
          }
          return clearDB();
        }
      );
    } else {
      return clearDB();
    }
  });


process.env.TEST_SUITE = 'create_new_user';
  test('should create a new user', (done) => {
    request(app).post('/api/users')
    .send({
      name: "Testname1",
      email: "email1@email.com",
      postcode: "NW5 1SD",
      password: "123456"
    })
    .then((response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });

process.env.TEST_SUITE = 'auto_login';
  test('user is automatically logged in upon first registration', (done) => {
    request(app).post('/api/users')
    .send({
      name: "Testname2",
      email: "email2@email.com",
      postcode: "NW1 1SD",
      password: "123456"
    })
    .then((response) => {
      expect(response.body.token).not.toBe(undefined);
      done();
    });
  });

process.env.TEST_SUITE = 'no_name';
  test('should return an error if new user fails to enter a name', (done) => {
    request(app).post('/api/users')
    .send({
      email: "email3@email.com",
      postcode: "NW5 1SD",
      password: "123456"
    })
    .then((response) => {
      expect(response.error.text.includes('Name is required')).toBe(true)
      done();
    });
  });

process.env.TEST_SUITE = 'no_email';
  test('should return an error if new user fails to enter a valid email', (done) => {
    request(app).post('/api/users')
    .send({
      name: "Testname4",
      email: "blah",
      postcode: "NW5 1SD",
      password: "123456"
    })
    .then((response) => {
      expect(response.error.text.includes('Please include a valid email')).toBe(true)
      done();
    });
  });

process.env.TEST_SUITE = 'no_password';
test('should return an error if new user fails to enter a password', (done) => {
    request(app).post('/api/users')
    .send({
      name: "Testname5",
      email: "email12@email.com",
      postcode: "NW5 1SD",
    })
    .then((response) => {
      expect(response.error.text.includes("Please enter a password with 6 or more characters")).toBe(true)
      done();
    });
  });

process.env.TEST_SUITE = 'register_twice';
  test('should return an error if user attempts to register twice with same email', (done) => {
    request(app).post('/api/users')
    .send({
      name: "Testname6",
      email: "email6@email.com",
      postcode: "NW5 1SD",
      password: "123456"
    })
    .then((response) => {
      done();
    });
    request(app).post('/api/users')
    .send({
      name: "Testname6",
      email: "email6@email.com",
      postcode: "NW5 1SD",
      password: "123456"
    })
    .then((response) => {
      expect(response.error.text.includes('User already exists')).toBe(true)
      done();
    });
  });

  // afterEach((done) => {
  //   mongoose.connection.db.dropDatabase(done);
  //   mongoose.connection.close()
  //
  // });

  afterEach(function(done) {
    // Added this line to replace afterEach async:
    removeAllCollections()
    mongoose.disconnect();
    return done();
  });

  // afterEach(async () => {
  //   await removeAllCollections()
  // })

  afterAll(done => {
    return done();
  });

});
