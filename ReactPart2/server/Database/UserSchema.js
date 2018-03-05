const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    userLogin: {type: String, min : [3, 'Too small userLogin']},
    userPassword: {type: String, min : [3, 'Too small userPassword']}
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;