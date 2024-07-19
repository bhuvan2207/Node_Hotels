const express=require('express');
const router=express.Router();
const MenuItem=require('./../models/MenuItem');

router.post('/',async(req,res)=>{
    try{
        const data1=req.body;

        const newmenu=new MenuItem(data1);

        const response1=await newmenu.save();

        console.log('data saved',response1);
        res.status(200).json(response1);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'})
    }  
});

router.get('/',async(req,res)=>{
    try{
        const data=await MenuItem.find();

        console.log('data fetched');
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'})
    } 
    
});

router.get('/:tasteType', async(req,res)=>{
    try{
        const tasteType=req.params.tasteType;
        if(tasteType=='sweet' || tasteType=='sour' || tasteType=='spicy'){
            const response=await MenuItem.find({taste:tasteType});
            console.log('Data Fetched');
            res.status(200).json(response);
        }
        else{
            res.status(404).json('Invalid tatse type');
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'})
    } 
});

module.exports=router;