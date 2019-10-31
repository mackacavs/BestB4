const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');
const post = require('../../models/Post')



router.get('/', (req, res) =>res.send('Testing'))

router.post('/', [auth, [
  check('description', 'Description is required')
  .not()
  .isEmpty(),
  check('expiry', 'Expiry is required')
  .not()
  .isEmpty()
]
],
async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({errors: errors.array() })
  }
  try {
    const user = await User.findById(req.user.id).select('-password')

  const newPost = new Post({
    description: req.body.description,
    expiry: req.body.expiry,
    name: user.name,
    avatar: user.avatar,
    user: req.user.id
  });
  const post = await newPost.save()
  res.json(post)
} catch (err) {
  console.log(err.message)
  res.status(500).send('Server Error')
  }
 }
)

module.exports = router;
