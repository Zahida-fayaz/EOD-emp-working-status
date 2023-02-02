const jwt = require('jsonwebtoken');
const User = require('../models/user');

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;

  // check json web token exists & is verified
  if (token) {
    jwt.verify(token, 'secret code is placed here', (err, decodedToken) => {
      if (err) {
        res.redirect('/login');
      } else {
        // console.log(decodedToken);
        next();
      }
    });
  } else {
    res.redirect('/login');
  }
};

// check current user
const checkUser = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, 'secret code is placed here', async (err, decodedToken) => {
      if (err) {
        res.locals.user = null;
        next();
      } else {
        let user = await User.findById(decodedToken.id);
        res.locals.user = user;
        next();
      }
    });
  } else {
    res.locals.user = null;
    next();
  }
};

//middleware to check the admin
const isAdmin = (req, res, next) => {
  const user = res.locals.user;
  if (user && user.role !== 'admin') {
    return res.status(401).send('Unauthorised');
  }
  next();
};

//middleware to check the employee
const isEmployee=(req,res,next)=>{
  const user = res.locals.user;
  if(user&& user.role !== 'employee'){
    return res.status(401).send('unauthorised')
  }
  next();
}

module.exports = { requireAuth, checkUser, isAdmin ,isEmployee}