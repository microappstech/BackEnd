const mongoose = require('mongoose')

const { Schema } = require('./job')


const Schema = mongoose.Schema
 const jobSchema = new Schema({
     tittle: {

        type: String,
        required: true,
     },
     description:{
         type:String,
         required:true,

     },
     category:{
            type: String,
            required:true,
     },
     duration:{
        type: String,
        required:true,
    },
    price:{
        type: String,
        required:true,
 },

 })
 const job = mongoose.model('job',jobSchema)
  module.exports= job