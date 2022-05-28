const express = require('express');
const router = express.Router();
const Post = require('../models/Category');
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
const cpUpload = upload.fields([{ name: 'cat_img' }, { name: 'vedio' }])
router.post('/', cpUpload, async (req, res,next) => {
    // res.send(req.files)
    // const audioFile = req.files.cat_img[0];
    // const audioGraphic = req.files.vedio[0];
    // console.log(audioFile.originalname, audioGraphic.originalname)

        try {
            const post = new Post({
                cat_id: shortid.generate(),
                url: req.body.url,
                category_name: req.body.category_name,
                cat_type: req.body.cat_type,
                cat_img: req.files.cat_img[0]['fieldname'] +'-' +uniqueSuffix + '-' + req.files.cat_img[0]['originalname'],
                stockcheck:'',
                imagealt: req.body.imagealt,
                vedio: req.files.vedio[0]['fieldname'] +'-' +uniqueSuffix + '-' + req.files.vedio[0]['originalname'],
                vedioalt: req.body.vedioalt,
                metatitle: req.body.metatitle,
                metakeyword: req.body.metakeyword,
                metadesc: req.body.metadesc,
                status: "Active",
            });
            const savePost = await post.save();
            res.json(savePost);
        }
        catch (err) {
            res.json({message:`Could not upload the file: ${err}`});
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
const ucUpload = upload.fields([{ name: 'cat_img', maxCount: 1 },{ name: 'vedio', maxCount: 1 }])
router.patch('/:postId', ucUpload , async (req, res) => {
    try {
         if(ucUpload > 0){
            const updatedPost = await Post.updateOne(
                { _id: req.params.postId },
                { $set: { 
                    url: req.body.url,
                    category_name: req.body.category_name,
                    cat_type: req.body.cat_type, 
                    cat_img: req.files.cat_img[0]['fieldname'] +'-' +uniqueSuffix + '-' + req.files.cat_img[0]['originalname'],
                    imagealt: req.body.imagealt,
                    vedio: req.files.vedio[0]['fieldname'] +'-' +uniqueSuffix + '-' + req.files.vedio[0]['originalname'],
                    vedioalt: req.body.vedioalt,
                    metatitle: req.body.metatitle,
                    metakeyword: req.body.metakeyword,
                    metadesc: req.body.metadesc,
                    status: "Active",
                } }
            );
            res.json(updatedPost);
         }
         else{
            const updatedPost = await Post.updateOne(
                { _id: req.params.postId },
                { $set: { 
                    url: req.body.url,
                    category_name: req.body.category_name,
                    cat_type: req.body.cat_type, 
                    imagealt: req.body.imagealt,
                    vedioalt: req.body.vedioalt,
                    metatitle: req.body.metatitle,
                    metakeyword: req.body.metakeyword,
                    metadesc: req.body.metadesc,
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