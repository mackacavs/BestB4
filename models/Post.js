const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    description: {
        type: String,
        required: true
    },
    expiry: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    postcode: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: true
    }
})

module.exports = Post = mongoose.model('post', postSchema);