const mongoose = require('mongoose');
const Schema = mongoose.Schema();

const FollowerSchema = new Schema({
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'client'
    },
    provider: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'provider'
    }
})

module.exports = mongoose.model('follower', FollowerSchema);