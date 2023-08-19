const express = require('express');
const router = express.Router();
const Post = require('../models/Post');


// VIEW ALL POSTS
router.get('/post', async (req, res) => {
    try {
        const allPost = await Post.find();
        res.status(201).json(allPost);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// CREATE A POSTS
router.post('/post/new', async (req, res) => {
    try {
        const { img, desc } = req.body;
        const newPost = new Post(img, desc);
        await newPost.save();
        res.status(201).json('Post added successfully');
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// DELETING A POST
router.delete('/post/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Post.findByIdAndRemove(id);
        res.status(201).json({ message: 'Post deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;