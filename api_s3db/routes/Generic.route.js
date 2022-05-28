const express = require('express');
const router = express.Router();
const Post = require('../models/Generic');
const multer = require('multer');
var multerS3 = require('multer-s3')
const AWS = require('aws-sdk');
const uuid = require('uuid').v4;
const mongoose = require('mongoose');

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
const cpUpload = upload.fields([{ name: 'image', maxCount: 1 },{ name: 'vedio', maxCount: 1 }])
router.post('/',cpUpload, async (req, res,next) => {
    try {
        const post = new Post({
            generics_id: new mongoose.Types.ObjectId(),
            catnames: req.body.catnames,
            subname: req.body.subname,
            url: req.body.url,
            generices:req.body.generices,
            image:req.files.image[0]['fieldname'] +'-' +uniqueSuffix + '-' + req.files.image[0]['originalname'],
            imagealt:req.body.imagealt,
            vedio:req.files.vedio[0]['fieldname'] +'-' +uniqueSuffix + '-' + req.files.vedio[0]['originalname'],
            vedioalt:req.body.vedioalt,
            description:req.body.description,
            usesofmeds:req.body.usesofmeds,
            useofbenefits:req.body.useofbenefits,
            indicat:req.body.indicat,
            mechanism:req.body.mechanism,
            medicinework:req.body.medicinework,
            contraindications:req.body.contraindications,
            sideeffects:req.body.sideeffects,
            faqs:req.body.faqs,
            pregnancy:req.body.pregnancy,
            breastfeeding:req.body.breastfeeding,
            kidneyproblem:req.body.kidneyproblem,
            liverdisease:req.body.liverdisease,
            asthma:req.body.asthma,
            takemedicine:req.body.takemedicine,
            adult:req.body.adult,
            childrenmed:req.body.childrenmed,
            elderlymed:req.body.elderlymed,
            alcohol:req.body.alcohol,
            heartdisease: req.body.heartdisease,
            driving:req.body.driving,
            warnings:req.body.warnings,
            talkdoctor:req.body.talkdoctor,
            instructions:req.body.instructions,
            druginteraction:req.body.druginteraction,
            drugfood:req.body.drugfood,
            drugdiease:req.body.drugdiease,
            fooditems:req.body.fooditems,
            overdose:req.body.overdose,
            misseddose:req.body.misseddose,
            disposal:req.body.disposal,
            fasttag:req.body.fasttag,
            refer:req.body.refer,
            metatitle:req.body.metatitle,
            metakeyword:req.body.metakeyword,
            metadesc:req.body.metadesc,
            status:"Active",
        });
        const savePost = await post.save();
        res.json(savePost);
         
    }
    catch (err) {
        // res.json({ message: "Data not added" });
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
const ucUpload = upload.fields([{ name: 'image', maxCount: 1 },{ name: 'vedio', maxCount: 1 }])
router.patch('/:postId', ucUpload , async (req, res,next) => {
    try {
            const updatedPost = await Post.updateOne(
                { _id: req.params.postId },
                { $set: { 
                    catnames: req.body.catnames,
                    subname: req.body.subname,
                    url: req.body.url,
                    generices:req.body.generices,
                    image:req.files.image[0]['fieldname'] +'-' +uniqueSuffix + '-' + req.files.image[0]['originalname'],
                    imagealt:req.body.imagealt,
                    vedio:req.files.vedio[0]['fieldname'] +'-' +uniqueSuffix + '-' + req.files.vedio[0]['originalname'],
                    vedioalt:req.body.vedioalt,
                    description:req.body.description,
                    usesofmeds:req.body.usesofmeds,
                    useofbenefits:req.body.useofbenefits,
                    indicat:req.body.indicat,
                    mechanism:req.body.mechanism,
                    medicinework:req.body.medicinework,
                    contraindications:req.body.contraindications,
                    sideeffects:req.body.sideeffects,
                    faqs:req.body.faqs,
                    pregnancy:req.body.pregnancy,
                    breastfeeding:req.body.breastfeeding,
                    kidneyproblem:req.body.kidneyproblem,
                    liverdisease:req.body.liverdisease,
                    asthma:req.body.asthma,
                    takemedicine:req.body.takemedicine,
                    adult:req.body.adult,
                    childrenmed:req.body.childrenmed,
                    elderlymed:req.body.elderlymed,
                    alcohol:req.body.alcohol,
                    heartdisease: req.body.heartdisease,
                    driving:req.body.driving,
                    warnings:req.body.warnings,
                    talkdoctor:req.body.talkdoctor,
                    instructions:req.body.instructions,
                    druginteraction:req.body.druginteraction,
                    drugfood:req.body.drugfood,
                    drugdiease:req.body.drugdiease,
                    fooditems:req.body.fooditems,
                    overdose:req.body.overdose,
                    misseddose:req.body.misseddose,
                    disposal:req.body.disposal,
                    fasttag:req.body.fasttag,
                    refer:req.body.refer,
                    metatitle:req.body.metatitle,
                    metakeyword:req.body.metakeyword,
                    metadesc:req.body.metadesc,
                    status:"Active",
                } }
            );
            res.json(updatedPost);
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