const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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

module.exports = User = mongoose.model('Scores', ScoreSchema);