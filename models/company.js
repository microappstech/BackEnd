const mongoose = require('mongoose')
const Schema = mongoose.Schema
 const companySchema= mongoose.Schema({
     picture:{
         type:String,
         default:""
     },
     fullName:{
        type:String,
      required:true
    },
    adresse:{
        type:String,
       required:true
    },
    birthday:{
        type:Date,
      required:true
    },
    github:{
        type:String,
        default:""
    }

 })
 const Company = mongoose.model('company',companySchema)
  module.exports= Company