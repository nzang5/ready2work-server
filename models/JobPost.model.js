const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");


const JobPostSchema = new Schema(
  {
    title: { type: String },
    description: { type: String },   
    companyName: { type: String }
  },
  {
    timestamps: true,
  }
);

const JobPost = model("JobPost", JobPostSchema);


module.exports = JobPost;
