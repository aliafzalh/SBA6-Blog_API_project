const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        reqired: true,
        index: true
    },
    email: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }
})
module.exports = mongoose.model('user', userSchemaSchema);