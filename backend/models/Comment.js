const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    // author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    // post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
    // parentComment: { type: mongoose.Schema.Types.ObjectId, ref: 'Comment' },
    content: { type: String, required: true },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
