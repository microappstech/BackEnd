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
    user.phone=req.body.phone
    user.description=req.body.description
    user.github=req.body.github
    user.avatar=req.body.avatar
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


// get upadate user by ID 
router.get("/update/:username", async (req,res)=>{
    const username = req.params.username;
    let user = await User.find((obj)=>{obj.name == username})
    if(user){

        user.full_name = req.body.full_name
        user.phone = req.body.phone
        user.email = req.body.email
        user.username= req.body.username
        user.password=req.body.password
        user.phone=req.body.phone
        user.description=req.body.description
        user.github=req.body.github
        user.avatar=req.body.avatar
        try {
            await user.save()
            res.send(" update")
            }
         catch (error) {
            res.send(error)
        }}
})
module.exports = router