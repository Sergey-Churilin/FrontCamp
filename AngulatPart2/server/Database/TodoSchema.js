const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    id: Number,
    name: {type: String, min: [3, 'Too small Title']},
    content: String,
    date: Number,
    status:String,
    mode: String,
    visible: Boolean
});

const TodoModel = mongoose.model('Todo', TodoSchema);

module.exports = TodoModel;

