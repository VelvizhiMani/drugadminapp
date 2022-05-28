const express = require('express');
const router = express.Router();
const Post = require('../models/Product');
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
const cpUpload = upload.fields([{ name: 'product_img', maxCount: 1 },{ name: 'vedio', maxCount: 1 }])
router.post('/',cpUpload, async (req, res, next) => {
    try {
        if (req.body.rexrequired === 'yes') {
            rex = 'rx required'; 
        }
        else {
            rex = ''; 
        }

        price1 = req.body.price;
		if (price1 == '' || price1 == '0') {
			price = '0';
		} else {
			price = price1;
		}

        const percentage = req.body.percentage;
		if (percentage == '0' || percentage == '') {
			saleprice = "";
		} else {
			sale = (percentage / 100) * req.body.price;
			saleprice =  req.body.price - sale;
		}

        // if (req.files.product_img[0]['originalname'] > 0) {
        //     product_img = req.files.product_img[0]['fieldname'] +'-' +uniqueSuffix + '-' + req.files.product_img[0]['originalname'];
        // } else {
        //     product_img = '';
        // }

        // if (req.files.vedio[0]['originalname'] > 0 ) {
        //     vedio = req.files.vedio[0]['fieldname'] +'-' +uniqueSuffix + '-' + req.files.vedio[0]['originalname'];	
        // } else {
        //     vedio = '';
		// }
     

        const post = new Post({
            product_id: new mongoose.Types.ObjectId(),
            cat_name: req.body.cat_name,
            subcat_name:req.body.subcat_name,
            generices: req.body.generices,
            product_code:"000",
            product_name:req.body.product_name,
            url:req.body.url,
            genericname:req.body.genericname,
            brand:req.body.brand,
            manufactuer:req.body.manufactuer,
            manufactueraddress:req.body.manufactueraddress,
            tabscount:req.body.tabscount,
            strength:req.body.strength,
            package:req.body.package,
            price:price,
            // packing:req.body.packing,
            // product_img:product_img,
            product_img:req.files.product_img[0]['fieldname'] +'-' +uniqueSuffix + '-' + req.files.product_img[0]['originalname'],
            description:req.body.description,
            // disclaimer:req.body.disclaimer,
            stock:req.body.stock,
            saleprice:saleprice,
            percentage:req.body.percentage,
            saleprice:saleprice,
            rexrequired:rex,
            orgin:req.body.orgin,
            storage:req.body.storage,
            status:req.body.status,
            timestamp:req.body.timestamp,
            writebyid:req.body.writebyid,
            reviewbyid:req.body.reviewbyid,
            reference:req.body.reference,
            metatitle:req.body.metatitle,
            metakeyword:req.body.metakeyword,
            metadesc:req.body.metadesc,
            varient:req.body.varient,
            imagealt:req.body.imagealt,
            // vedio:vedio,
            vedio:req.files.vedio[0]['fieldname'] +'-' +uniqueSuffix + '-' + req.files.vedio[0]['originalname'],
            vedioalt:req.body.vedioalt,
            userupdate:new Date()/1000,
            updatetimestamp:new Date(),
            userid:"1",
            date:new Date(),
            referwebsite:req.body.referwebsite,
            expires:req.body.expires,
            usesofmeds:req.body.usesofmeds,
            useofbenefits:req.body.useofbenefits,
            indicat:req.body.indicat,
            machanism:req.body.machanism,
            medicinework:req.body.medicinework,
            contraindications:req.body.contraindications,
            sideeffects:req.body.sideeffects,
            faqs:req.body.faqs,
            pregnancy:req.body.pregnancy,
            breastfeeding:req.body.breastfeeding,
            kidneyproblem:req.body.kidneyproblem,
            liverdisease:req.body.liverdisease,
            heartdisease:req.body.heartdisease,
            asthma:req.body.asthma,
            takemedicine:req.body.takemedicine,
            adult:req.body.adult,
            childrenmed:req.body.childrenmed,
            elderlymed:req.body.elderlymed,
            alcohol:req.body.alcohol,
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
            ingredients:"qwerd",
            direction:"wer",
            dosages:"ssd",
            precaution:"wrw",
            prostatus:"sds",
            paymenttype:req.body.paymenttype,
            retunpolicy:req.body.retunpolicy,
            gst:req.body.gst,
            hsn:req.body.hsn,
            // updated_at:req.body.updated_at,
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
const ucUpload = upload.fields([{ name: 'product_img', maxCount: 1 },{ name: 'vedio', maxCount: 1 }])
router.patch('/:postId',ucUpload , async (req, res,next) => {
    try {
        if (req.body.rexrequired === 'yes') {
            rex = 'rx required'; 
        }
        else {
            rex = ''; 
        }
    
        price1 = req.body.price;
        if (price1 == '' || price1 == '0') {
            price = '0';
        } else {
            price = price1;
        }
    
        const percentage = req.body.percentage;
        if (percentage == '0' || percentage == '') {
            saleprice = "";
        } else {
            sale = (percentage / 100) * req.body.price;
            saleprice =  req.body.price - sale;
        }
        //  if(ucUpload > 0){
            

            const updatedPost = await Post.updateOne(
                { _id: req.params.postId },
                { $set: { 
                    cat_name: req.body.cat_name,
                    subcat_name:req.body.subcat_name,
                    generices: req.body.generices,
                    product_code:"000",
                    product_name:req.body.product_name,
                    url:req.body.url,
                    genericname:req.body.genericname,
                    brand:req.body.brand,
                    manufactuer:req.body.manufactuer,
                    manufactueraddress:req.body.manufactueraddress,
                    tabscount:req.body.tabscount,
                    strength:req.body.strength,
                    package:req.body.package,
                    price:price,
                    product_img:req.files.product_img[0]['fieldname'] +'-' +uniqueSuffix + '-' + req.files.product_img[0]['originalname'],
                    description:req.body.description,
                    stock:req.body.stock,
                    saleprice:saleprice,
                    percentage:req.body.percentage,
                    saleprice:saleprice,
                    rexrequired:rex,
                    orgin:req.body.orgin,
                    storage:req.body.storage,
                    status:req.body.status,
                    timestamp:req.body.timestamp,
                    writebyid:req.body.writebyid,
                    reviewbyid:req.body.reviewbyid,
                    reference:req.body.reference,
                    metatitle:req.body.metatitle,
                    metakeyword:req.body.metakeyword,
                    metadesc:req.body.metadesc,
                    varient:req.body.varient,
                    imagealt:req.body.imagealt,
                    vedio:req.files.vedio[0]['fieldname'] +'-' +uniqueSuffix + '-' + req.files.vedio[0]['originalname'],
                    vedioalt:req.body.vedioalt,
                    userupdate:new Date()/1000,
                    updatetimestamp:new Date(),
                    userid:"1",
                    date:new Date(),
                    referwebsite:req.body.referwebsite,
                    expires:req.body.expires,
                    usesofmeds:req.body.usesofmeds,
                    useofbenefits:req.body.useofbenefits,
                    indicat:req.body.indicat,
                    machanism:req.body.machanism,
                    medicinework:req.body.medicinework,
                    contraindications:req.body.contraindications,
                    sideeffects:req.body.sideeffects,
                    faqs:req.body.faqs,
                    pregnancy:req.body.pregnancy,
                    breastfeeding:req.body.breastfeeding,
                    kidneyproblem:req.body.kidneyproblem,
                    liverdisease:req.body.liverdisease,
                    heartdisease:req.body.heartdisease,
                    asthma:req.body.asthma,
                    takemedicine:req.body.takemedicine,
                    adult:req.body.adult,
                    childrenmed:req.body.childrenmed,
                    elderlymed:req.body.elderlymed,
                    alcohol:req.body.alcohol,
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
                    ingredients:"qwerd",
                    direction:"wer",
                    dosages:"ssd",
                    precaution:"wrw",
                    prostatus:"sds",
                    paymenttype:req.body.paymenttype,
                    retunpolicy:req.body.retunpolicy,
                    gst:req.body.gst,
                    hsn:req.body.hsn,
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