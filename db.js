const mongoose = require('mongoose');
require('dotenv').config();


//Define the mongoDB connection URL
//const mongoURL = process.env.MONGODB_URL_LOCAL; //Replace 'mydatabase ' with your database name;
   
 const mongoURL = process.env.MONGODB_URL;


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