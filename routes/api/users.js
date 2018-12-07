const express = require('express'); 
const router = express.Router(); 
const User  = require('../../models/User');

//==============GET ALL==============//
router.get('/', (req, res) => {
    User.find()
    .sort({ date: -1 })
    .then(users => res.json(users))
});

//=============GET ONE===============// 
router.fetch('/:id', (req, res) => {
    User.findById(req.params.id)
    .sort({ date: -1 })
    .then(user => res.json(user))
});

//==============CREATE==============//

router.post('/', (req, res ) => {
    const newUser = new User({
        parentName: req.body.parentName,
        childName: req.body.childName,
        childAge: req.body.childAge
    });     
    newUser.save().then(user => res.json(user));
}); 

//=============UPDATE================//

//==============DELETE==============//

router.delete('/:id',(req, res) =>{ 
    User.findById(req.params.id)
    .then(user => user.remove().then(() => res.json({success: true })))
    .catch(() => res.status(404).json({success: false })) 
    
})

module.exports = router;
