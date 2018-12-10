const express = require('express'); 
const router = express.Router(); 
const boyParser = require('body-parser')
const bcrypt = require('jsonwebtoken')
const Item  = require('../../models/Item');
const jwt = require('./VerifyToken')
const config = require('../config')
const User = require('../models/User')

const VerifyToken = require('./VerifyToken');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
//==============GET ALL==============//
router.get('/me', (req, res) => {
    User.findById(req.userId, { password : 0 }  )
    .then( user => {
        if (!user) return res.status(404).send('No User Found');
        return res.status(200).send(user);
    })
    .catch( err = res.status(500).send('there was a problem finding User'))
    })

//==============CREATE==============//
router.post('/register', (req, res ) => {

    const {name, email, password } = req.body;
    
    let hashPassword = bcrypt.hashSync(password, 8);

    User.create({
        name,
        email,
        password: hashPassword
    })
    .then( user => {
        let token = jwt.sign({ id: user._id }, config.secret, {
            expiresIn: 86400 
        })
        return res.status(200).send({ auth: true, token})
    })
    .catch( err => res.status(500).send(err.message));
    

}); 
//==============CREATE==============//
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email })
    .then( user => {
        if (!user) return res.status(404).send('No User Found');
        let isPasswordValid = bcrypt.compareSync(password, user.password);
        if (!isPasswordValid) return res.status(401).send( {
            auht: false, 
            token: null 
        });
        let token =jwt.sign( { id: user._id }, config.secret, {
            expiresIn: 86400
        })
        return res.status(200).send({ auth: true, token });

    })

});

router.get('/logout', (res, req) => {
    return res.status(200).send({ auth: false, token: null  });
})

module.exports = router;
