const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');
const Message = require('../../models/Message')

router.post('/', [auth, [
  check('message', 'Message is required')
    .not()
    .isEmpty(),
]
],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    try {
      const user = await User.findById(req.user.id).select('-password')
      const newMessage = new Message({
        message: req.body.message,
        name: user.name,
        user: req.user.id,
        recipient: req.body.id
      });
      const message = await newMessage.save()
      res.json(message)
    } catch (err) {
      console.log(err.message)
      res.status(500).send('Server Error')
    }
  }
)


module.exports = router;
