const Reegister = require('../models/register');

//gt reg page
const register_new_user = (req, res) => {
    res.render('components/signup')
};

//register
const register_new_user_post = (req, res) => {
    const register = new Reegister(req.body);
    register.save()
        .then(() => {
            console.log("registered")
            console.log(register)
        })
        .catch(err => {
            console.log("Got an error")
            console.log(err)
        })
    res.redirect('/show');
};

module.exports = {
    register_new_user,
    register_new_user_post
} 