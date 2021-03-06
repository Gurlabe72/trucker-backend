const mongoose = require('mongoose');
const Item = require('./Item');
const Schema = mongoose.Schema


const UsersSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    token: [],
        followers: [],
        following: [],
    post: [{
        type: Schema.Types.ObjectId,
        ref: 'item'
    }],
    date: { 
        type: Date, 
        default: Date.now 
    }
});

module.exports = Users = mongoose.model('users', UsersSchema);