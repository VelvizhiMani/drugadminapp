const mongoose = require("mongoose")
const storageSchema = new mongoose.Schema({
    storagename: {
        type:String,
        required:true
    },
    storageurl: {
        type:String,
        required:true
    },
    status: {
        type:String
    },
    adddate: {
        type: Date, default: Date.now
    },
    timestamp:{
        type: Date, default: Date.now
    },
    updatedate:{
        type: Date, default: Date.now
    },
    uptimestamp:{
        type: Date, default: Date.now
    },
    adduser: {
        type:String,
    },
    updateuser: {
        type:String,
    },
    updated_at: {
        type: Date, default: Date.now
    },
},{timestamps:true})

// we will create a new collection
const Storage = new mongoose.model('Storage',storageSchema,'storage');

module.exports =  Storage;