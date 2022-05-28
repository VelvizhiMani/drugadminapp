const mongoose = require("mongoose")
const ReferwebsiteSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    picture:{
        type:String,
    },
    imagealt:{
        type:String,
    },
    qualification:{
        type:String,
    },
    desgination:{
        type:String,
    },
    experience:{
        type:String,
    },
    expdetails:{
        type:String,
    },
    about:{
        type:String,
    },
    education:{
        type:String,
    },
    status:{
        type:String,
    },
    date:{
        type: Date, default: Date.now
    },
    timestamp: {
        type: Date, default: Date.now
    },
    updated_at: {
        type: Date, default: Date.now
    },
},{timestamps:true})

// we will create a new collection
const Referwebsite = new mongoose.model('Reviewby',ReferwebsiteSchema,'reviewby');

module.exports =  Referwebsite;