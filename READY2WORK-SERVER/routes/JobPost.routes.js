const express = require("express");
const JobPost = require("../models/JobPost.model");


const router = require("express").Router();


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