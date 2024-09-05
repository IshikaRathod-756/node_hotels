const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();
const passport = require('./auth');
const bodyParser = require('body-parser');
app.use(bodyParser.json()); // req.body in save

const PORT = process.env.PORT ||3000;

//Middleware function
const LogRequest = (req,res, next) =>{
  console.log(`[${new Date().toLocaleString()}] Request Made to : ${req.originalUrl}`);
  next();//Move on to the next phase
 }

app.use(LogRequest);


app.use(passport.initialize());

const localAuthMiddleware = passport.authenticate('local',{session: false})
app.get('/',function(req,res){
    res.send('Welcome to my hotel ...... ');
})

// import the router files
const personRoutes = require('./routes/personRoutes');
const MenuItemRoutes = require('./routes/menuItemRoutes');


//use the router
app.use('/person' ,personRoutes);
app.use('/menu',MenuItemRoutes);

/*const PORT = 3001; // Use a different port number

// Define your routes and middleware here

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});*/



app.listen(PORT,()=>{
    console.log('Listening on port 3000');
})