const userModel=require('../models/user.model');
const jwt=require("jsonwebtoken");

async function registerUser(req,res){

    try{
    const{username,email,currency}=req.body;

    const isUserAlreadyExist=await userModel.findOne({
        $or:[
            {username},
            {email}
        ]
    })

    if(isUserAlreadyExist){
        return res.status(409).json({message:"user already exist"})
    }

    const user= await userModel.create({
        username,
        email,
        currency:currency||'INR'
    });

    const token=jwt.sign({
        id:user._id
    },process.env.JWT_SECRET)

    res.cookie("token",token)


    res.status(201).json({
        message:"User registered successfully",
        user:{
            id:user._id,
            username:user.username,
            email:user.email,
            currency:user.currency
        }
    });
}catch(error){

    return res.status(500).json({message:"Server Error while registering",error:error.message}
    );
   }
}

module.exports={registerUser};