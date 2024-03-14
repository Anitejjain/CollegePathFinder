const mongoose = require('mongoose');

const collegeGSchema = new mongoose.Schema({
    userType: {
        type: String,
        required: true,
        trim: true,
    },
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
        index: true,
    },
    address: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: [true, "Password is Required"]
    },
    email: {
        type: String,
        required: true,
    },
    college: {
        type: String,
        required: true,
        trim: true,
    },
    major: {
        type: String,
        required: true,
        trim: true,
    },
    graduationYear: {
        type: String,
        required: true,
    },
    opinion: {
        type: [String],
    },

}, { timestamps: true });

const collegeGoingModel = mongoose.model("collegeGoing", collegeGSchema)

module.exports = collegeGoingModel;
