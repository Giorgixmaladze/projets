const mongoose = require('mongoose');

// სქემა იმისა თუ როგორ დაემატება ანუ რა სტრქუქტურით, ყოველი ახალი მომხმარებლის ობიექტი
const userSchema = new mongoose.Schema({
    name: {
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
    }
})

const User = mongoose.model('User', userSchema);

module.exports = {User};