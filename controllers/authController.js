 const User = require('../models/user');
 const jwt = require('jsonwebtoken');
const { create } = require('../models/report');

 // create json web token
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, 'net ninja secret', {
    expiresIn: maxAge
  });
};

//gt reg page
const signup_get = (req, res) => {
    res.render('components/signup')
};

const login_get = (req, res) => {
    res.render('components/login')
};
//register
const signup_post = async (req, res) => { 
  try {
    const user = await User.create(req.body);
    const token = createToken(user._id);
    console.log(user)
    // res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
    // res.status(201).json({ user: user._id });
  }
  catch (err) {
    console.log(err)
    // const errors = handleErrors(err);
    // res.status(400).json({ errors });
  } 
};

module.exports = {
    signup_get,
    signup_post,
    login_get,
    
} 