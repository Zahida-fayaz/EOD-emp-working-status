const mongoose = require('mongoose')

//database schems
const taskSchema = new mongoose.Schema({
    name: String,
    task_id: String,
    description: String,
    date: String,
    working_hours: Number
});

module.exports = mongoose.model("Task", taskSchema);