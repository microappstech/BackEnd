const express = require("express")
const router = express.Router()
const User = require('../models/user')

router.get("/",(req,res)=>{
    let user = {
        name:"hassin",
        email:"exeple@gmail.com"
    }
    res.send(user)

})
router.post('/register', async (req,res)=>{
    let user = new User()
    user.name = req.body.name
    user.password=req.body.password

    try {
        await user.save()
        res.send("Success")
        }
     catch (error) {
        res.send(error)
    }
})


router.get("/talent",async (req,res)=>{
     let user = await User.find()
     res.send(user)
     
})

module.exports = router