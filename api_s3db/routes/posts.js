const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const multer = require('multer');
const AWS = require('aws-sdk');
const uuid = require('uuid').v4;

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ID,
    secretAccessKey: process.env.AWS_SECRET
})

const storage = multer.memoryStorage({
    destination: function (req, file, callback) {
        callback(null, '')
    }
})

const upload = multer({ storage });

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
router.post('/', upload.single('image'), async (req, res) => {
    try {
        const myFile = req.file.originalname.split(".")
        const fileType = myFile[myFile.length - 1]
        const params = {
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: `${uuid()}.${fileType}`,
            Body: req.file.buffer
        }

        s3.upload(params, async (error, data) => {
            try {
                const post = new Post({
                    title: req.body.title,
                    description: req.body.description,
                    image: params.Key,
                });
                const savePost = await post.save();
                res.json(savePost);
            }
            catch (error) {

                res.status(500).send(error)
            }
        });

    }
    catch (err) {
        res.json({ message: err });
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
router.patch('/:postId', upload.single('image'), async (req, res) => {
    try {
        const myFile = req.file.originalname.split(".")
        const fileType = myFile[myFile.length - 1]
        const params = {
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: `${uuid()}.${fileType}`,
            Body: req.file.buffer
        }
        s3.upload(params, async (error, data) => {
            try {
                const updatedPost = await Post.updateOne(
                    { _id: req.params.postId },
                    { $set: { title: req.body.title,
                        description: req.body.description,
                         image: params.Key, } }
                );
                res.json(updatedPost);
            }
            catch (error) {
                res.status(500).send(error)
            }
        });
       
    }
    
    catch (err) {
        res.json({ message: err });
    }
})

//DELETE POST
router.delete('/:postId', async (req, res) => {
    try {
        const removePost = await Post.remove({ _id: req.params.postId });
        res.json(removePost);
    }
    catch (err) {
        res.json({ message: err });
    }
})

module.exports = router;