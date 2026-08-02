const mongoose=require("mongoose")

const UserSchema=new mongoose.Schema({

    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    currency:{
        type:String,
        required:true,
        default:'INR',
        uppercase:true,
    }

})

const userModel=mongoose.model("user",UserSchema);

module.exports=userModel;