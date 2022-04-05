const express = require("express")
const router = express.Router()
const User = require('../models/user')




// get all users
router.get("/", async (req,res)=>{
    res.send('<h1>this is home page</h1>')

})
// get user by ID 
router.get("/:username", async (req,res)=>{
    const username = req.params.username;
    let user = await User.find((obj)=>{obj.name == username})
    if(user){
        res.send(user)
    }

})

// add user 
router.post('/sign-up', async (req,res)=>{
    let user = new User()

    user.full_name = req.body.full_name
    user.phone = req.body.phone
    user.email = req.body.email
    user.username= req.body.username
    user.password=req.body.password
    try {
        await user.save()
        res.send("Success")
        }
     catch (error) {
        res.send(error)
    }
})



// auth user
router.post('/auth',(req,res)=>{

})

// update user
router.post('/update',(req,res)=>{
    let user = {
        username:"hjkjkhkj",
        full_name:"hamza mouddakir",
        password:"ghghgh",
        phone:"ghjggg",
        email:"ghggjggkghjgk@gmail.com"
    }
    user.username = req.body.username
})

module.exports = router