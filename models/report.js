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