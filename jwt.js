const jwt=require('jsonwebtoken');

const jwtAuthMiddelware=(req,res,next)=>{

    const token=req.headers.authorization.split(' ')[1];
    if(!token) return res.status(401).json({error:' Unauthorizes'});
    
    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        req.user=decoded;
        next();
    }
    catch(err)
    {
        console.error(err);
        res.status(401).json({error:'Invalid Token'})
    }

};

const generateToken=(userData)=>{
    return jwt.sign(userData, process.env.JWT_SECRET);


}

module.exports={jwtAuthMiddelware, generateToken};