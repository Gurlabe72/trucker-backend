const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema n
const UserSchema = new Schema({ 
    parentName: {
        type: String, 
        required: true 
    },
    childName: {
        type: String, 
        required: true 
    },
    childAge: {
        type: Number, 
        required: true 
    }
});

module.exports = User = mongoose.model('Users', UserSchema);