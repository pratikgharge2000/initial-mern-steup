const mongoose=require("mongoose");

const connection=()=>{
    mongoose.connect(process.env.MONGO_URL).then((res)=>{
        console.log("DB_Connected")
    }).catch((err)=>{
        console.log("DB connection error",err)
    })
}

module.exports=connection