const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.set("strictQuery", true);
mongoose.connect("mongodb+srv://zahida:zahida@test.kgff3hf.mongodb.net/test")
.then(() => {
    console.log("Database Connected");
})
.catch((err) => {
    console.log("you did something wrong, database not connected");
    console.log(err);
});   


app.set("view engine", "ejs");

app.get("/index", function(req, res){
    res.render("index");
});





app.listen("8080", function(){
    console.log("our web app is working on 3000 port number");
});