const express = require("express")
const router = express.Router()
const User = require('../models/user')




// get all users
router.get('/', async (req,res)=>{
    let user = await User.find()
    res.send(user)
})
// get user by ID 
router.get("/:username", async (req,res)=>{
    let user = await User.findOne({username:req.params.username})    
    res.send(user)
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
        res.send(user)
        }
     catch (error) {
        res.send(error)
    }
})



// auth user
router.post('/auth',(req,res)=>{

})


// get upadate user by ID 
router.patch("/update/:id", async (req,res)=>{
    
    let user = await User.findById( req.params.id)
        try {
            Object.assign(user,req.body);
            user.save()
            res.send({Data:user});
        } catch  {
            res.status(404).send({Error:"user not found"})
            
        }
})



// delete user
router.delete("/delete/:id",async (req,res)=>{
    try{
        let user = await User.findById(req.body.params);
        await user.remove();
        res.send({data:user})
    }
    catch{
        res.status(404).send({error:"cannot delet the user!!!"})
    }
})
module.exports = router

