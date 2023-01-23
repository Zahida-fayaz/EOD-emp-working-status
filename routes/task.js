const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Task = require('../models/taskSchema');

router.get("/", function (req, res) {
    res.render('components/addReport');
});

router.post("/", (req, res) => {
    const task = new Task(req.body);
    task.save()
        .then(() => {
            console.log("data added");
            console.log(task);
        })
        .catch(err => {
            console.log("got an error");
            console.log(err);
        })
        res.redirect('/report');
});



router.get("/", function(req, res){
    Task.find({}, function(error, result){
        if(error){
            console.log("there was an error while retrieving the data");
            console.log(error);
        }else{
            res.render("components/showReports", {
                reportList: result
                


            });
        }
    });

});

module.exports = router;