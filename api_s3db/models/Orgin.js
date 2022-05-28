const mongoose = require("mongoose")
const orginSchema = new mongoose.Schema({
    orginname: {
        type:String,
        required:true
    },
    status:{
        type:String,
    },
    date: {
        type: Date, default: Date.now
    },
},{timestamps:true})

// we will create a new collection
const Form = new mongoose.model('Orgin',orginSchema,'orgin');

module.exports =  Form;