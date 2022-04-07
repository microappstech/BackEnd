const express = require('express')
const router  = express.Router()
const Company = require('../models/company')


// get all users
router.get('/all', async (req,res)=>{
    let company = await Company.find()
    res.send(company)
})
// get user by ID 
router.get("/:compaName", async (req,res)=>{
    let company = await Company.findOne({companyName:req.params.companyName})    
    res.send(company)
})

// add company 
router.post('/sign-upC' , async (req,res)=>{
    let company = new Company()
    company.CompanyName = req.body.CompanyName
   
    company.email = req.body.email
    
    company.password=req.body.password
    company.birthday= req.body.birthday
    company.description=req.body.description
    company.github=req.body.github
    company.picture=req.body.pictire
   
    try {
        await Company.save()
        res.send(company)
        }
     catch (error) {
        res.send(error)
    }
})



// auth user
router.post('/auth',(req,res)=>{

})


// get upadate user by ID 
router.patch("/updateCompany/:id", async (req,res)=>{
    
    let company = await Company.findById( req.params.id)
        try {
            Object.assign(company.req.body);
            company.save()
            res.send({Data:company});
        } catch  {
            res.status(404).send({Error:"company not found"})
            
        }
})



// delete user
router.delete("/deleteCompany/:id",async (req,res)=>{
    try{
        let company = await Company.findById(req.body.params);
        await company.remove();
        res.send({data:company})
    }
    catch{
        res.status(404).send({error:"cannot delet the user!!!"})
    }
})


module.exports = router ;