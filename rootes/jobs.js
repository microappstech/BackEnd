const express = require('express')
const router  = express.Router()
const Job = require('../models/job')

router.get('/jobs', async (req,res)=>{
    let job = await Job.find()
    res.send(job)
})

module.exports = router