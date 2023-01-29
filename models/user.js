const mongoose = require('mongoose');

//registration schema
const userSchema = new mongoose.Schema({
    fullname:String,
    email:String,
    password:String,
    mobilenumber:String,
    designation:String,
    address:String
});
module.exports = mongoose.model('Regiister', userSchema);