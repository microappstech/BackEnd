const mongoose = require('mongoose')
 const Schema = mongoose.Schema


 const companySchema=  new Schema({
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
    },
    jobsPosted:{
      type:Number,
      default:null
    }
    

 })
 const Company = mongoose.model('company',companySchema)
  module.exports= Company