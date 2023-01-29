const mongoose = require('mongoose');

//registration schema
const registerSchema = new mongoose.Schema({
    fullname:String,
    email:String,
    mobilenumber:String,
    designation:String,
    address:String
});
module.exports = mongoose.model('Reegister', registerSchema);