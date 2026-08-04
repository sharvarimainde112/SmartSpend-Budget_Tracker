const express=require('express');
const authController=require("../controllers/auth.controllers")
const AuthUser = require("../middleware/auth.middleware");


const Router=express.Router();

Router.use(AuthUser);

Router.post('/Register',authController.registerUser);

module.exports=Router;
