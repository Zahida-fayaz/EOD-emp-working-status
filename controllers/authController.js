 const Register = require('../models/user');
 /*
 const bcrypt = require('bcryptjs');
 const jwt = require('jsonwebtoken');
*/
//gt reg page
const register_new_user = (req, res) => {
    res.render('components/signup')
};

//register
const register_new_user_post = (req, res) => {
    const reegister = new Reegister(req.body);
    register.save()
        .then(() => {
            console.log("registered")
            console.log(reegister)
        })
        .catch(err => {
            console.log("Got an error")
            console.log(err)
        })
    //res.redirect('/show');
};

module.exports = {
    register_new_user,
    register_new_user_post
} 