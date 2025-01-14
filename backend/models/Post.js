const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  
    img: { type: String, required: true },
    desc: { type: String, required: true },
   
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
