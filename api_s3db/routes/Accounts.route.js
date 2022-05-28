const express = require('express');
const router = express.Router();
const Post = require('../models/Accounts');

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
router.post('/', async (req, res,next) => {
    try {
        const post = new Post({
            category: req.body.category,
            subcategory: req.body.subcategory,
            productid: req.body.productid,
            product: req.body.product,
            manufactuer: req.body.manufactuer,
            batch: req.body.batch,
            qtys: req.body.qtys,
            expiry: req.body.expiry,
            hsn_1: req.body.hsn,
            gst: req.body.gst,
            mrp: req.body.mrp,
            discount: req.body.discount,
            date: req.body.date,
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
router.patch('/:postId', async (req, res) => {
    try {
            const updatedPost = await Post.updateOne(
                { _id: req.params.postId },
                { $set: { 
                    category: req.body.category,
                    subcategory: req.body.subcategory,
                    productid: req.body.productid,
                    product: req.body.product,
                    manufactuer: req.body.manufactuer,
                    batch: req.body.batch,
                    qtys: req.body.qtys,
                    expiry: req.body.expiry,
                    hsn_1: req.body.hsn,
                    gst: req.body.gst,
                    mrp: req.body.mrp,
                    discount: req.body.discount,
                    date: req.body.date,
                    status: "Active",
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