const express = require('express');
const mongoose = require('mongoose');
const app = express();
// const PORT = process.env.PORT || 5000

app.use(express.json({ extended: false }))

// app.listen(PORT, () => console.log('Server has started'));

app.get('/', (req, res) => res.send('Hello'));

if (process.env.NODE_ENV === 'test') {
  mongoose.connect('mongodb://localhost/testDatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
    .catch((err) => console.log(err));
} else {
  mongoose.connect('mongodb://localhost/bestB4', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
    .catch((err) => console.log(err));
}

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/login', require('./routes/api/login'));
app.use('/api/messages', require('./routes/api/messages'));


module.exports = app

  // .then(() => {
  // console.log("We have connected")
  // })
