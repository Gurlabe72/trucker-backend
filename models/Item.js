const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema n
const ItemSchema = new Schema({ 
    comment: {
        type: String, 
        required: true 
    },
    date: {
        type: Date, 
        default: Date.now
    }
});

module.exports = Item = mongoose.model('Items', ItemSchema);