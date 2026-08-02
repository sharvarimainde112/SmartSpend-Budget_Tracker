const express=require('express');
const authController=require("../controllers/auth.controllers")

const Router=express.Router();

Router.post('/Register',authController.registerUser);

module.exports=Router;
