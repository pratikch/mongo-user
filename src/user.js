const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    lastName: String
});

const Users = mongoose.model('users', UserSchema);

module.exports = Users;
