
const mongoose= require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name:{
        type:String,
        required:[true,"name is required"],
        trim:true
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    }
  }
)

module.exports=mongoose.model("userData",userSchema);