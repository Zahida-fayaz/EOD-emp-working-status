const express = require('express');
const app = express();
const path = require('path');
const ejsMate = require('ejs-mate');
const mongoose = require("mongoose")
const bodyParser = require('body-parser');
const report = require('./routes/reportRoutes')
const authRoutes = require('./routes/authRoutes')
const cookieParser = require('cookie-parser')
const adminRoutes = require('./routes/adminRoutes')
const { requireAuth, checkUser, isAdmin, isEmployee } = require('./middleware/auth')

//Database Connection
mongoose.set('strictQuery', true)
mongoose.connect("mongodb+srv://zahida:zahida@test.kgff3hf.mongodb.net/employee")
    .then(() => {
        console.log("Database Connected !!!");
        app.listen("3000", () => {
            console.log("Listening on port 3000")
        })
    })
    .catch(err => {
        console.log("Oh!! Database failed to connect")
        console.log(err)
    })

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json())
app.use(cookieParser())


app.get('*', checkUser)

//home route
app.get('/', (req, res) => {
    res.render('components/home')
});

//login routes
app.use(authRoutes)


//report routes
app.use('/reports',isEmployee, requireAuth, report)

//admin routes
app.use(requireAuth, isAdmin, adminRoutes)

