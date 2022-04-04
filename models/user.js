const mongoose = require('mongoose')
const Schema = mongoose.Schema



const UserSchema = new Schema({
    username: {
        type:String,
        required:true
    },
    avatar:{
        type:String,
        default:""
    },
    github:{
        type:String
    },
    description:{
        type:String
    },
    phone:{
        type:String
    },
    email:{
        type:String,
        required:true
    },
    full_name:{
        type:String,
        required:true
    },

    password:{
        type:String,
        required:true
    },
    field:{
        type:String
    },
    created_at:{
        type:Date,
        default:Date.now
    }
    



})




const User = mongoose.model('User',UserSchema)
module.exports = User 