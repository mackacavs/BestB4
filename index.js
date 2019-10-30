const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000


app.listen(PORT, () => console.log('Server has started'));

app.get('/',(req, res) => res.send('Hello'));

mongoose.connect('mongodb://localhost/bestB4', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})
  .then(() => {
    console.log("We have connected")
  });
