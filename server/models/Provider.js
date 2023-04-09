const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProviderSchema = new Schema({
    server: {
        type: String,
        required: true
    },
    nickname: {
        type: String,
        required: true
    },
    fee: {
        type: Number,
        required: true
    },
    accountID: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('provider', ProviderSchema);