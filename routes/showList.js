const express = require("express");
const router = express.Router();
const Task = require("../views/components/showReport");



router.get("/showReport", function(req, res){
    Task.find({}, function(error, result){
        if(error){
            console.log("there was an error while retrieving the data");
            console.log(error);
        }else{
            res.render("components/showReport", {
                


            });
        }
    });

});

module.exports = router;