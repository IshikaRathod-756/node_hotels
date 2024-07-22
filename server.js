const express = require('express');
const app = express();
const db = require('./db');
const Person = require('./models/Person');

const bodyParser = require('body-parser');
app.use(bodyParser.json()); // req.body in save





app.get('/',function(req,res){
    res.send('Welcome to my hotel ...... ');
})




// import the router files
const personRoutes = require('./routes/personRoutes');
const MenuItemRoutes = require('./routes/menuItemRoutes');


//use the router
app.use('/person',personRoutes);
app.use('/menu',MenuItemRoutes);



app.listen(3000 ,()=>{
    console.log('Listening on port 3000');
})