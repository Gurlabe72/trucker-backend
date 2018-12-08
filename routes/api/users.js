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
router.put('/:id', (req, res) => {
    User.findById(req.params.id)
    .sort({ date: -1 })
    .then(user => res.json(user))
});
//==============CREATE==============//
router.post('/', (req, res ) => {
    const newUser = new User({
    });     
    newUser.save().then(user => res.json(user));
}); 

// //=============UPDATE================//
router.put('/:id', (req, res) => {

const updateUser = (userInfo, id) => {
    let { user, title } = userInfo;
    
    return Users.findByIdAndUpdate({_id: id}, userInfo)
    .then(() => {
        return Users.findOne({_id: id})
        .then(user => {
            return user;
        })
    })
}
})
//==============DELETE==============//

router.delete('/:id',(req, res) =>{ 
    User.findById(req.params.id)
    .then(user => user.remove().then(() => res.json({success: true })))
    .catch(() => res.status(404).json({success: false })) 
    
})

module.exports = router;
