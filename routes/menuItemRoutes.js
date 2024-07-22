const express = require('express');
const router = express.Router();
const MenuItem = require('./../models/MenuItem');



// POST route to add a menu iterms
router.post('/', async(req, res) =>{
    try{
        const data = req.body  // Assuming the request body contains the person data
    
        //create a new menu document using the Mongoose model
        const newMenu= new MenuItem(data);
        
     
        // save the new menu to the databases
        const response = await newMenu.save();
        console.log('data saved');
        res.status(200).json(response);
    
    }
        catch(err){
            console.log(err);
            res.status(500).json({error: 'Internal server error'});
          
    }
})
// Get method to get the menu items 

router.get('/', async(req,res) =>{
    try{
        const data = await MenuItem.find();
        console.log('data fetched');
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'});
    }
})


router.get('/:taste', async(req,res) =>{
    try{
        //const data = await MenuItem.find();
       // console.log('data fetched');
       // res.status(200).json(data);
    }
    catch(err){
       // console.log(err);
        //res.status(500).json({error:'Internal server error'});
    }
})
// camment add
module.exports = router;
