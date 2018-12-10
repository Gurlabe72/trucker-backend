const express = require('express');
const router = express.Router();

router.get('me', (req, res) => {
    res.status(200).send("GET is working")
});

module.exports = router; 