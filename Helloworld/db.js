const mongoose = require('mongoose');
const mongoURL = 'mongodb://localhost:27017/hotels'

mongoose.connect(mongoURL,{
     useNewUrlParser: true,
     useUnifiedTopology: true
})

const db = mongoose.connection;
// Event linsners already pridifiend These event listeners allow you to react to different states of the database connection

db.on('connected', () => {
     console.log('connected to MongoDB');
});

db.on('error', () => {
     console.log('error to MongoDB');
});

db.on('Disconnected', () => {
     console.log('Disconnected to MongoDB');
});

module.exports = db;