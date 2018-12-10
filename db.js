const mongoose = require('mongoose');
const mongoDbUri  = 'mongodb://@ds163672.mlab.com:63672/trucker';

mongoose.connect( mongoDbUri, { useNewUrlParser: true,
auth: {
    user:'ana',
    password:'Ana123'
}
});
const db = mongoose.connection;

db.on('error', () => console.log("ERROR CONNECTING TO MongoDB"));
db.once('open', () => console.log("MongoDB connected"));
