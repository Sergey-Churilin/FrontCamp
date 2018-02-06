const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    title: {type: String, min: [3, 'Too small Title']},
    author: {type: String, min: [3, 'Too small Author name']},
    body: String
});

const BlogModel = mongoose.model('Blog', BlogSchema);

module.exports = BlogModel;

