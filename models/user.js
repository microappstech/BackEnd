const mongoose = require('mongoose')
const Schema = mongoose.Schema



const UserSchema = new Schema({
    username: {
        type:String,
        required:true
    },
    full_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    avatar:{
        type:String,
        default:"https://avatars.githubusercontent.com/u/1?v=4"
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