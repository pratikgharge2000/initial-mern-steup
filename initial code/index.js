const express=require("express");
const cors = require("cors");
const dotenv = require("dotenv").config(); 
const connection = require("./config/connection.js"); //DB connection
connection();
const app=express();

//MIDDLEWERE
app.use(cors());
app.use(express.json());


//FOR PRODUCTION
if(process.env.NODE_ENV=="production"){
    app.use(express.static("client/build"))
}

app.listen(process.env.PORT || 8000,()=>{
    console.log("server is running on port 8000");
})