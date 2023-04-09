const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FollowerSchema = new Schema({
    accountID: {
        type: Number,
        required: true
    },
    providers: [{
        provider: {
            type: Schema.Types.ObjectId,
            ref: 'provider'
        },
        strategy: {
            type: String
        }
    }],
    server: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('follower', FollowerSchema);