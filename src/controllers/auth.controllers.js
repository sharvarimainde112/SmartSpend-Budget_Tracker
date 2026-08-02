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

async function loginUser(req,res){

    try{
    const{email}=req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const UserExists=await userModel.findOne({email});

    if(UserExists){
        const token=jwt.sign({
            id:UserExists._id,        
        },process.env.JWT_SECRET)

        res.cookie("token",token);

    return res.status(200).json({
            message:"Login successful",
            user:{
                id:UserExists._id,
                username:UserExists.username,
                email:UserExists.email,
                currency:UserExists.currency
            },
        });
    }
    return res.status(404).json({message:"User not found"});
}catch(error){
    console.error("Error in loginUser:", error);
    return res.status(500).json({ message: "Internal server error" });
    }
}

module.exports={registerUser, loginUser};