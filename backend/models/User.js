const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        unique: true,
    },
    tasks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "userTask"
    }]
});

const UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel;