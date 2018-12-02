const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const forms = require('./routes/api/Forms.Route');
const app = express();

//BodyParser MiddleWare
app.use(bodyParser.json());

//DB config 

const db = require('./config/keys').mongoURI;

//Connecting to MongoDB

mongoose.connect(db)
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));

//Use Routes
app.use(bodyParser.json()); 

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Your mom weights ${port} pounds`));

