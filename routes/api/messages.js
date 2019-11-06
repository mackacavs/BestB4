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
        recipient: req.body.recipient
      });
      const message = await newMessage.save()
      res.json(message)
    } catch (err) {
      console.log(err.message)
      res.status(500).send('Server Errors')
    }
  }
)


router.get('/', auth, async (req, res) => {
  try {
    currentUser = req.user.id
    console.log(currentUser)
    const messages = await Message.find({recipient: req.user.id}).sort({ date: -1 })
    res.json(messages)
  } catch (err) {
    console.log(err.message)
    res.status(500).send("server error")
  }
})




module.exports = router;
