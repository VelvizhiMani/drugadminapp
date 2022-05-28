const express = require('express');
const router = express.Router();
const Post = require('../models/Form');
const multer = require('multer');
var multerS3 = require('multer-s3')
const AWS = require('aws-sdk');

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
        cb(null, {fieldName: file.fieldname});
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
router.post('/',  upload.single('picture'), async (req, res,next) => {
    try {
        if(req.file == undefined){
                const post = new Post({
            formname: req.body.formname,
            formurl: req.body.formurl,
            alt: req.body.alt,
            metatitle: req.body.metatitle,
            metakeyword: req.body.metakeyword,
            metadesc: req.body.metadesc,
            status: "Active",
            adduser: "1",
            updateuser: "",
            updatedate: "",
        });
        const savePost = await post.save();
        res.json(savePost);
        }
        else {
            const post = new Post({
            formname: req.body.formname,
            formurl: req.body.formurl,
            picture: req.file.fieldname +'-' +uniqueSuffix + '-' + req.file.originalname,
            alt: req.body.alt,
            metatitle: req.body.metatitle,
            metakeyword: req.body.metakeyword,
            metadesc: req.body.metadesc,
            status: "Active",
            adduser: "1",
            updateuser: "",
            updatedate: "",
        });
        const savePost = await post.save();
        res.json(savePost);
        }
        
    //     if(upload.single('picture') > 0){
    //     const post = new Post({
    //         formname: req.body.formname,
    //         formurl: req.body.formurl,
    //         picture: req.file.fieldname +'-' +uniqueSuffix + '-' + req.file.originalname,
    //         alt: req.body.alt,
    //         metatitle: req.body.metatitle,
    //         metakeyword: req.body.metakeyword,
    //         metadesc: req.body.metadesc,
    //         status: "Active",
    //         adduser: "1",
    //         updateuser: "",
    //         updatedate: "",
    //     });
    //     const savePost = await post.save();
    //     res.json(savePost);
    // }
    // else{
    //     const post = new Post({
    //         formname: req.body.formname,
    //         formurl: req.body.formurl,
    //         alt: req.body.alt,
    //         metatitle: req.body.metatitle,
    //         metakeyword: req.body.metakeyword,
    //         metadesc: req.body.metadesc,
    //         status: "Active",
    //         adduser: "1",
    //         updateuser: "",
    //         updatedate: "",
    //     });
    //     const savePost = await post.save();
    //     res.json(savePost);
    // }
         
    }
    catch(err) {
        res.status(500).send({message:`Could not upload the file: ${req.file}.${err}`})
        
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
router.patch('/:postId', upload.single('picture'), async (req, res) => {
    try {
            const updatedPost = await Post.updateOne(
                { _id: req.params.postId },
                { $set: { 
                    formname: req.body.formname,
                    formurl: req.body.formurl,
                    picture: req.file.fieldname +'-' +uniqueSuffix + '-' + req.file.originalname,
                    alt: req.body.alt,
                    metatitle: req.body.metatitle,
                    metakeyword: req.body.metakeyword,
                    metadesc: req.body.metadesc,
                    updateuser: "1",
                    updatedate: new Date(),
                } }
            );
            res.json(updatedPost);
            
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