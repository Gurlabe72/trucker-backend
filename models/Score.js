const mongoose = require('mongoose');
const User = require('./User');
const Item = require('./Item');
const Schema = mongoose.Schema

//Create Schema 
const ScoreSchema = new Schema({ 
    user: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    post: [{
        type: Schema.Types.ObjectId,
        ref: 'Item'
    }],
    scoreValue: { 
        type: Number, 
        required: true
    },
    date: {
        type: Date, 
        default: Date.now
    }
    
});

module.exports = Score = mongoose.model('Scores', ScoreSchema);