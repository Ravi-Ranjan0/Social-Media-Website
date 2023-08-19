const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    img : {
        type : String,
        trim : true
    },
    desc : {
        type : String,
        trim : true
    }
});

const Post = mongoose.model('Post' , postSchema);

module.exports = Post;