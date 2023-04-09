const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ServerSchema = new Schema({
    server: {
        type: String,
        require: true
    },
    IP: {
        type: String,
        require: true
    },
    Port: {
        type: Number,
        require: true
    }
})

module.exports = mongoose.model('servers', ServerSchema);