const mongoose = require('mongoose');
const User = require('./User');
const Schema = mongoose.Schema;

//Create Schema 
const ItemSchema = new Schema({ 
    user: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    naughtyComment: {
        type: String,
        required: false 
    },
    niceComment: {
        type: String,
        required: false 
    },
    date: { 
        type: Date, 
        default: Date.now 
    }
    
});

module.exports = Item = mongoose.model('Items', ItemSchema);