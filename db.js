const mongoose = require('mongoose');


//Define the mongoDB connection URL
const mongoURL = 'mongodb://Localhost:27017/hotels'//Replace 'mydatabase ' with your database name


//set up mongodb connection

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

//Get the default connection
//Mongoose maintains a default connection object representing the mongoDB connection.
const db = mongoose.connection;

/// Define event listeners for database connection

db.on('connected',() => {
    console.log('connected to mongodb server');
});


db.on('error',(err) => {
    console.log(' mongodb connectoin error');
});


db.on('disconnected',() => {
    console.log(' mongodb is disconnected');
});


// Export the databasen connection

module.exports = db;