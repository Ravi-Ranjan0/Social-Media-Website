const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    // author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    img: { type: String, required: true },
    desc: { type: String, required: true },
    // comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
    // likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
