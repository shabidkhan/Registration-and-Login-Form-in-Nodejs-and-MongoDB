const mongoose = require("mongoose")

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
// users - { name, email (unique), mobile, password(hashed) }


module.exports = mongoose.model("Users",userSchema)