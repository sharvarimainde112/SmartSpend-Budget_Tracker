require('dotenv').config();

const app=require('./src/app');
const connectDB=require('./src/db/db');

connectDB();

app.listen(8080,()=>{
    console.log("server is listing to port 8080");
});