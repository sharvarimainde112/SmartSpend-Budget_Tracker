const express=require("express");
const app=express();
const cookieParser=require('cookie-parser');
const authRoutes=require('./routes/auth.routes');
const transactionRoutes=require('./routes/transaction.routes');

app.use(express.json());
app.use(cookieParser());
app.use('/api/auth',authRoutes);

module.exports=app;

app.get("/",(req,res)=>{
    res.send("I am root");
});




