const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    roles: {
        User: {
            type: Boolean,
            default: true
        },
        Admin: {
            type: Boolean,
            default: false
        },
    },
    password: {
        type: String,
        required: true
    },
    refreshToken: String
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;

