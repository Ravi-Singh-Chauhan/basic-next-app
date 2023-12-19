import mongoose, { mongo } from "mongoose";
import { stringify } from "querystring";


const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,"please provide username"],
        unique:true
    },
    email:{
        type:String,
        required:[true,"Please provide email"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"please provide a password."]
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    forgetPasswordToken:String,
    forgetPasswordTokenExpiry:Date,
    verifyToken:String,
    verifyTokenExpiry:String

})

const User = mongoose.models.users||mongoose.model("users",userSchema);
export default User;