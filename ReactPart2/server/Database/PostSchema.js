const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    author: {type: String, min: [3, 'Too small Title']},
    post: String,
    visible:Boolean
});

const PostModel = mongoose.model('Post', PostSchema);

module.exports = PostModel;

