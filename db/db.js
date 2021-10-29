const mongoose = require("mongoose")
require("dotenv").config()

// for the db connection 
mongoose.connect(process.env.dbUrl)
.then(()=>{
    console.log("db connected");
})
.catch(err=>{
    console.log(err);
})

