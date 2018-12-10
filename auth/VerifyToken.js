const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('../config');


const verifyToken = (req, res, next) => {
    let token = req.header['x-access-token']; 
    if (!token) return res.status(403).send({ auth:false, message: "no token provided" });

    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) return res.status(500).send({ auth: false, message: "Failed to authenticate the token"});
        res.status(200).send({ auth: false, message: 'No Token Provided'});
    })
}

router.get('me', (req, res) => {
    res.status(200).send("GET is working")
});

module.exports = verifyToken; 