const mongoose = require("mongoose")
const orginSchema = new mongoose.Schema({
    category: {
        type:String,
    },
    subcategory: {
        type:String,
    },
    productid: {
        type:String,
    },
    productname: {
        type:String,
    },
    manufactuer: {
        type:String,
    },
    hsn_1:{
        type:String,
    },
    batch:{
        type:String,
    },
    expiry:{
        type:String,
    },
    qtys:{
        type:String,
    },
    gst:{
        type:String,
    },
    mrp:{
        type:String,
    },
    discount:{
        type:String,
    },
    purchasedate:{
        type: Date, default: Date.now
    },
    date:{
        type: Date, 
    },
    status:{
        type:String,
    },
    timestamp: {
        type: Date, default: Date.now
    },
    updated_at: {
        type: Date, default: Date.now
    },
},{timestamps:true})

// we will create a new collection
const Form = new mongoose.model('Accounts',orginSchema,'accounts');

module.exports =  Form;