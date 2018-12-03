const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema 
const ItemSchema = new Schema({
    //Name and Date are the only things so far 
    name: {
        type: String, 
        required: true 
    },
    date: {
        type: Date, 
        default: Date.now
    }
})

module.exports = Item  = mongoose.model('Items', ItemSchema);