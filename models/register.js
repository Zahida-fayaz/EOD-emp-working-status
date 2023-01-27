const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
    fullname:String,
    email:String,
    mobilenumber:String,
    designation:String,
    address:String
});

module.exports = mongoose.model('Register', registerSchema);