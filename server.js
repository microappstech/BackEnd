const express = require('express')
const users = require("./rootes/users")
const mongoose = require("mongoose")
const cors = require('cors')
 const jobs = require('./rootes/jobs')
const bodyParser = require('body-parser')



const app = express()
app.use(cors())
app.use(express.json())

app.get("/info",(req,res)=>{
    res.send('hello ')
})
app.use("/user",users)
app.use("/job",jobs)

// string connectio
mongoose.connect("mongodb+srv://stunearyou:QoCbxj3fmrNbWgAX@stunearyoucluster.owle6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
.then(()=>{
    console.log('app connected')
})
.catch((error)=>{
    console.log(error)
})





app.listen(3030,()=>{
    console.log("app runnig on https://127.0.0.1:3030")

})