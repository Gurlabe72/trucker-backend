const express = require('express'); 
const router = express.Router(); 
const boyParser = require('body-parser')
const bcrypt = require('jsonwebtoken')
const Item  = require('../../models/Item');
const jwt = require('./VerifyToken')
const config = require('../config')
const User = require('../models/User')

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
//==============GET ALL==============//
router.get('/me', (req, res) => {
    const token = req.headers['x-access-token'];
    if(!token) return res.status(401).send({ auth: false, message: 'No Token Provided'
});

jwt.verify(token, config.secret, (err, decoded) => {
    if (err) return res.status(500).send({
        auth: false,
        message: 'failed to authenticate token'
    })
        res.status(200).send(decoded);
    })
});


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
