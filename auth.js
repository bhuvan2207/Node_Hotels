const Person=require('./models/Person');
const passport=require('passport');
const LocalStrategy=require('passport-local').Strategy;


passport.use(new LocalStrategy(async (usern,password,done)=>{
    try{
        // console.log('Recieved Credentials:',usern,password);
        const user=await Person.findOne({username:usern});
        if(!user)
            return done(null,false,{message:'Incorrect username'});
        const isPasswordMatch=user.comparePassword(password);
        if(isPasswordMatch){
            return done(null,user)
        }
        else{
            return done(null,false,{message:'Incorrect password'})
        }
    }
    catch(err){
        return done(err);

    }
}));

module.exports=passport;