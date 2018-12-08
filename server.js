const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require ('body-parser');

const users = require('./routes/api/users')
const items = require('./routes/api/items');
const scores = require('./routes/api/scores')
const app = express();

app.use(bodyParser.json());

const db = require('./config/keys').mongoURI

mongoose.connect(db) 
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));
    app.use('/api/users', users );
    app.use('/api/items', items );
    app.use('/api/scores', scores)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server Started on port${port}`))