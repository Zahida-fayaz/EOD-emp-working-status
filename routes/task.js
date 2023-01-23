const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

router.get("/index", function (req, res) {
    res.render("components/index");
});

router.post("/index", (req, res) => {
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
});

module.exports = router;