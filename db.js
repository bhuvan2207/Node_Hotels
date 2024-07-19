const mongoose=require('mongoose');

const mongoURl='mongodb://localhost:27017/hotels';

mongoose.connect(mongoURl,{})

const db=mongoose.connection;

db.on('connected',()=>{
    console.log('Connected to MongoDB server');
});

db.on('error',(err)=>{
    console.error('MongoDB connection error',err);
});

db.on('disconnected',()=>{
    console.log('MongoDB Disconnected');
});

module.exports=db;