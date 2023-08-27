const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const { isLoggedIn } = require('../middlewares/authVerification');

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

// CREATING POSTS
router.post('/post/new', isLoggedIn, async (req, res) => {
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

// UPDATING POST
router.patch('/post/:id', isLoggedIn, async (req, res) => {
    try {
        const { id } = req.params;
        const updates = await req.body;
        const updatedPost = await Post.findByIdAndUpdate(id, updates, { new: true });
        if (updatedPost) {
            res.json({ message: 'Post updated successfully !!!' });
        } else {
            res.status(404).json({ message: 'Post not found' });
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
})
// DELETING POST
router.delete('/post/:id', isLoggedIn, async (req, res) => {
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