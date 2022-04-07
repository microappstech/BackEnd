const express = require('express')
const router  = express.Router()
const Job = require('../models/job')

router.get('/jobs', async (req,res)=>{
    let job = await Job.find()
    res.send(job)
})
router.post('/create-job', async (req,res)=>{
    let job = new Job()

    job.tittle = req.body.tittle
    job.description = req.body.description
    job.category = req.body.category
    job.duration= req.body.duration
    job.price=req.body.price
    try {
        await job.save()
        res.send("Success")
        }
     catch (error) {
        res.send(error)
    }
})
//filter
router.get("/job", async (req,res)=>{
    const tittle = req.params.tittle;
    let job = await job.find((obj)=>{obj.name == tittle})
    if(job){
        res.send(job)
    }

})

module.exports = router