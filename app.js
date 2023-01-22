const express = require("express");
const app = express();


app.get("/", function(req, res){
    res.render("index");
});





app.listen("3000", function(){
    console.log("our web app is working on 3000 port number");
})