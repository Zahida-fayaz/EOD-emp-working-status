const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");


//connected to the database
mongoose.set("strictQuery", true);
mongoose.connect("mongodb+srv://zahida:<zahida>@test.kgff3hf.mongodb.net/test")
.then(() => {
    console.log("Database Connected");
})
.catch((err) => {
    console.log("you did something wrong, database not connected");
    console.log(err);
});  



//database schems
var taskSchema = new mongoose.Schema({
    name: String,
    task_id: String,
    description: String,
    date: String,
    working_hours:  Number 
});
 
var Task = mongoose.model("Task", taskSchema);
    

app.use(bodyParser.urlencoded({extended: true}));


app.set("view engine", "ejs");

app.get("/index", function(req, res){
    res.render("index");
});


 app.post("/index", (req, res) =>{
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





app.listen("8080", function(){
    console.log("our web app is working on 8080 port number");
});