const express = require("express");
const JobPost = require("../models/JobPost.model");


const router = require("express").Router();

router.get('/jobsList', (req, res) =>{
    JobPost.find()
    .then(foundList=> {
        res.status(200).json(foundList)
    })

})

// GET - Get a specific job by id
router.get('/jobslist/:jobId', (req, res, next) => {
    const { jobId } = req.params;
    console.log(jobId)
    JobPost.findById(jobId)
    .then(results => {
        res.status(200).json(results)
    })
    .catch(error => { console.log(error)})
    
});

// PUT  /api/jobslist/:jobsId  -  Updates a specific jobs by id
router.put('/jobslist/:jobId', (req, res, next) => {
    const { jobId } = req.params;

    JobPost.findByIdAndUpdate(jobId, req.body, { new: true })
    .then((updatedJobPost) => res.json(updatedJobPost))
    .catch(error => res.json(error));
});

// DELETE  /api/jobslist/:jobsId  -  Deletes a specific jobs by id
router.delete('/jobslist/:jobId', (req, res, next) => {
    const { jobId } = req.params;

    JobPost.findByIdAndRemove(jobId)
    .then(() => res.json({ message: `Project with ${jobsId} is removed successfully.` }))
    .catch(error => res.json(error));
});




router.post('/create', (req, res) => {
    console.log("made it here")
    const { title, description, companyName } = req.body;
    console.log("*****",req.body)
    JobPost.create({title, description, companyName})
    .then((newJob) => {
        if (!newJob) {
            res.status(401).json({ message: "Job was not created." })
            return;
          }
        else{
        res.status(200).json(newJob);
        }
    });
    
});

module.exports = router;