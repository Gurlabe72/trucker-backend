const mongoose = require('mongoose');
const mongoDbUri  = 'mongodb://ana:Ana123@ds163672.mlab.com:63672/trucker';


const db = mongoose.connection;

db.on('errpr', () => console.log("ERROR CONNECTING TO MongoDB"));
db.once('open', () =>console.log("MongoDB connected"));
