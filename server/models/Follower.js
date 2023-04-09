const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FollowerSchema = new Schema({
    accountID: {
        type: Number,
        require: true
    },
    provider: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'provider'
    }
})

module.exports = mongoose.model('follower', FollowerSchema);