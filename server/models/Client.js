const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    category: {
        type: String,
        enum: ['individual', 'corporate'],
        default: 'individual'
    },
    data: {
        type: Array,
        default: [100, 360, 720, 1000, 800, 650, 400]
    }
})

module.exports = mongoose.model('client', ClientSchema);