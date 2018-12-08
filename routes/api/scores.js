const express = require('express'); 
const router = express.Router(); 

const Score  = require('../../models/score');
//==============GET ALL==============//
router.get('/', (req, res) => {
    Score.find()
    .sort({ date: -1 })
    .then(scores => res.json(scores))
});
//=============GET ONE===============// 
router.put('/:id', (req, res) => {
    score.findById(req.params.Id)
    .sort({ date: -1 })
    .then(score => res.json(score))
});
//==============CREATE==============//
router.post('/', (req, res ) => {
    const newScore = new Score({
        name: req.body.name
    });     
    newScore.save().then(score => res.json(score));
}); 
//=============UPDATE================//
router.put('/:id', (req, res) => {

    const updateScore = (scoreInfo, id) => {
        let { score, title } = scoreInfo;
        
        return Scores.findByIdAndUpdate({_id: id}, scoreInfo)
        .then(() => {
            return Scores.findOne({_id: id})
            .then(score => {
                return score;1047
            })
        })
    }
    })
//==============DELETE==============//
router.delete('/:id',(req, res) =>{ 
    Score.findById(req.params.id)
    .then(score => score.remove().then(() => res.json({success: true })))
    .catch(() => res.status(404).json({success: false })) 
    
})
module.exports = router;