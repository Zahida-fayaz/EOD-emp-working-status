const mongoose = require('mongoose');


// addreport schema
const reportSchema = new mongoose.Schema({
    name:String,
    taskid:String,
    date:String,
    time:String,
    description:String
});

module.exports = mongoose.model('Report', reportSchema);

//registration schema
/*
const registerSchema = new mongoose.Schema({
    fullname:String,
    email:String,
    mobilenumber:String,
    designation:String,
    address:String
});

//creating model objects
const Report = mongoose.model('report', reportSchema);
const Register = mongoose.model('register', registerSchema);


//exporting model objects
module.exports = {Report, Register}  */