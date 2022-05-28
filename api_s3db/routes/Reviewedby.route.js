const express = require('express');
const router = express.Router();
const Post = require('../models/Reviewedby');
const multer = require('multer');
var multerS3 = require('multer-s3')
const AWS = require('aws-sdk');
const shortid = require('shortid');

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ID,
    secretAccessKey: process.env.AWS_SECRET
})

const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
var upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: process.env.AWS_BUCKET_NAME,
        metadata: function (req, file, cb) {
            cb(null, { fieldName: file.fieldname });
        },
        key: function (req, file, cb) {
            cb(null, file.fieldname + '-' + uniqueSuffix + '-' + file.originalname)

        }
    })
})

// GET BACK ALL THE POSTS
router.get('/', async (req, res) => {
    try {
        // const posts = await Post.find().limit(1);
        const posts = await Post.find();
        res.json(posts);
    }
    catch (err) {
        res.json({ message: err });
    }
});

// SUBMITS A POST
router.post('/', upload.single('picture'), async (req, res,next) => {
    try {
        if(req.file == undefined){
        const post = new Post({
            name: req.body.name,
            qualification: req.body.qualification,
            imagealt: req.body.imagealt,
            desgination: "",
            experience: req.body.experience,
            expdetails: "",
            about: "",
            education: "",
            status: "Active",
        });
        const savePost = await post.save();
        res.json(savePost);
    }
    else {
        const post = new Post({
            name: req.body.name,
            qualification: req.body.qualification,
            picture:req.file.fieldname +'-' +uniqueSuffix + '-' + req.file.originalname,
            imagealt: req.body.imagealt,
            desgination: "",
            experience: req.body.experience,
            expdetails: "",
            about: "",
            education: "",
            status: "Active",
        });
        const savePost = await post.save();
        res.json(savePost);
    }
         
    }
    catch (err) {
        // res.json({ message: err });
        return next(err);
    }
});

//SPECIFIC POST
router.get('/:postId', async (req, res) => {
    // console.log(req.params.postId)
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    }
    catch (err) {
        res.json({ message: err });
    }
});

// UPDATE A POST
router.patch('/:postId',upload.single('picture'), async (req, res) => {
    try {
        if(req.file == undefined){
            const updatedPost = await Post.updateOne(
                { _id: req.params.postId },
                { $set: { 
                    name: req.body.name,
                    qualification: req.body.qualification,
                    imagealt: req.body.imagealt,
                    desgination: "",
                    experience: req.body.experience,
                    expdetails: "",
                    about: "",
                    education: "",
                    status: "Active",
                } }
            );
            res.json(updatedPost);
        }
        else{
            const updatedPost = await Post.updateOne(
                { _id: req.params.postId },
                { $set: { 
                    name: req.body.name,
                    qualification: req.body.qualification,
                    picture:req.file.fieldname +'-' +uniqueSuffix + '-' + req.file.originalname,
                    imagealt: req.body.imagealt,
                    desgination: "",
                    experience: req.body.experience,
                    expdetails: "",
                    about: "",
                    education: "",
                    status: "Active",
                } }
            );
            res.json(updatedPost);

        }
    }
    catch (err) {
        res.json({ message: err });
    }
})

//DELETE POST
router.delete('/:postId', async (req, res) => {
    try {
        const removePost = await Post.deleteOne({ _id: req.params.postId });
        res.json(removePost);
    }
    catch (err) {
        res.json({ message: err });
    }
})

module.exports = router;