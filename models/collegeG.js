const mongoose = require('mongoose');

const collegeGoingSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    },
    userType:{
        type: String,
        required:true
    },
    college:{
        type: String,
        required:true
    },
    branch:{
        type: String,
        required:true
    },
    address:{
        type: String,
        required:true
    },
    academicExperience:{
        type: String,
        required:true
    },
    nonAcademicExperience:{
        type: String,
        required:true
    },
    placementExperience:{
        type: String,
        required:true
    },
    overallRating:{
        type: String,
        required:true
    }
})

const collegeGoingModel = mongoose.model("collegeGoing", collegeGoingSchema)

module.exports = collegeGoingModel;