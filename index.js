const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log('Server has started'));

app.get('/',(req, res) => res.send('Hello'));
