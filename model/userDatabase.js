const mongoose = require("mongoose")

// creating Schema
const userSchema = mongoose.Schema(
    {
        name: {
            type:String,
            required:true
            },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password:{ 
            type:String,
            required:true
        },
        mobile:{
            type:String,

        }
    }
)
console.log("collection");


module.exports = mongoose.model("Users",userSchema)