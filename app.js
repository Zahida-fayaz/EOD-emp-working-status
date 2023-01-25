const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const task = require('./routes/task')
const ejsMate = require('ejs-mate');

//connected to the database
mongoose.set("strictQuery", true);
mongoose.connect("mongodb+srv://zahida:zahida@test.kgff3hf.mongodb.net/employee")
    .then(() => {
        console.log("Database Connected");
        app.listen("8080", function () {
            console.log("our web app is working on 8080 port number");
        });
    })
    .catch((err) => {
        console.log("you did something wrong, database not connected");
        console.log(err);
    });

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));
app.engine('ejs', ejsMate);

app.get('/', (req, res) => {
    res.render('components/home');
})

app.use(task)
