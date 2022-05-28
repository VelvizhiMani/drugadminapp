const mongoose = require("mongoose")
const ReferwebsiteSchema = new mongoose.Schema({
    websitename: {
        type:String,
        required:true
    },
    url:{
        type:String,
    },
    status:{
        type:String,
    },
    adddate:{
        type: Date, default: Date.now
    },
    timestamp:{
        type: Date, default: Date.now
    },
    updatedate:{
        type:String,
    },
    uptimestamp:{
        type:String,
    },
    adduser:{
        type:String,
    },
    updateuser:{
        type:String,
    },
    updated_at: {
        type: Date, default: Date.now
    },
},{timestamps:true})

// we will create a new collection
const Referwebsite = new mongoose.model('Referwebsite',ReferwebsiteSchema,'referwebsite');

module.exports =  Referwebsite;