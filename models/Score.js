const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema n
const ScoreSchema = new Schema({ 
    parentName: {
        type: String, 
        required: true 
    },
    date: {
        type: Date, 
        default: Date.now
    }
});

module.exports = User = mongoose.model('Scores', ScoreSchema);