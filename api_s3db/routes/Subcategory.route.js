const express = require('express');
const router = express.Router();
const Post = require('../models/Subcategory');
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
const cpUpload = upload.fields([{ name: 'cat_img', maxCount: 1 },{ name: 'vedio', maxCount: 1 },{ name: 'banner', maxCount: 1 }])
router.post('/',  cpUpload, async (req, res,next) => {
    try {
        const post = new Post({
            sub_cat_id: shortid.generate(),
            cat_name: req.body.cat_name,
            subcat_name: req.body.subcat_name,
            url: req.body.url,
            cat_img: req.files.cat_img[0]['fieldname'] +'-' +uniqueSuffix + '-' + req.files.cat_img[0]['originalname'],
            imagealt: req.body.imagealt,
            vedio: req.files.vedio[0]['fieldname'] +'-' +uniqueSuffix + '-' + req.files.vedio[0]['originalname'],
            vedioalt: req.body.vedioalt,
            banner: req.files.banner[0]['fieldname'] +'-' +uniqueSuffix + '-' + req.files.banner[0]['originalname'],
            metatitle: req.body.metatitle,
            metakeyword: req.body.metakeyword,
            metadesc: req.body.metadesc,
            status: "Active",
        });
        const savePost = await post.save();
        res.json(savePost);
         
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
const ucUpload = upload.fields([{ name: 'cat_img', maxCount: 1 },{ name: 'vedio', maxCount: 1 },{ name: 'banner', maxCount: 1 }])
router.patch('/:postId', ucUpload , async (req, res) => {
    try {
         if(ucUpload > 0){
            const updatedPost = await Post.updateOne(
                { _id: req.params.postId },
                { $set: { 
                    cat_name: req.body.cat_name,
                    subcat_name: req.body.subcat_name,
                    url: req.body.url,
                    cat_img: req.files.cat_img[0]['fieldname'] +'-' +uniqueSuffix + '-' + req.files.cat_img[0]['originalname'],
                    imagealt: req.body.imagealt,
                    vedio: req.files.vedio[0]['fieldname'] +'-' +uniqueSuffix + '-' + req.files.vedio[0]['originalname'],
                    vedioalt: req.body.vedioalt,
                    banner: req.files.banner[0]['fieldname'] +'-' +uniqueSuffix + '-' + req.files.banner[0]['originalname'],
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
                    cat_name: req.body.cat_name,
                    url: req.body.url,
                    subcat_name: req.body.subcat_name,
                    imagealt: req.body.imagealt,
                    vedio: req.body.vedio,
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
       // res.json({ message: err });
       return next(err);
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