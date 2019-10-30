const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>res.send('Testing new user'))

module.exports =router;
