const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProviderSchema = new Schema({
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'client'
    },
    server: {
        type: String,
        required: true
    },
    nickName: {
        type: String,
        required: true
    },
    fee: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('provider', ProviderSchema);