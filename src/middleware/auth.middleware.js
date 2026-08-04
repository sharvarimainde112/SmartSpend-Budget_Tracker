const jwt=require("jsonwebtoken");


async function AuthUser(req,res,next){
    const token =req.cookies.token;

    if(!token){
        return res.status(401).json({message:"Unauthorized Access"})
    }

    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        req.user = decoded;
    }
    catch(err){
        console.log(err);
        return res.status(401).json({message:"Unauthorized Access"})
    }
}

module.exports=AuthUser;