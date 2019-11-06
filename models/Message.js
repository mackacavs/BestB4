const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    message: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true
    },

    recipient: {
        type: String,
        required: true
    }
})

module.exports = Message = mongoose.model('message', messageSchema);
