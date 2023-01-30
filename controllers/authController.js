 const Regiister = require('../models/user');
 
 //const bcrypt = require('bcryptjs');
 //const jwt = require('jsonwebtoken');

//gt reg page
const register_new_user = (req, res) => {
    res.render('components/signup')
};

//register
const register_new_user_post = (req, res) => { 
    bcrypt.hash(req.body.password, 10, function( error, hashedPassword){
    if(error){
        console.log("error occured while encrypting password");
    }
    
    const regiister = new Regiister({
        fullname: req.body.fullname,
        email: req.body.email,
        password: hashedPassword,
        mobilenumber: req.body.mobilenumber,
        designation: req.body.designation,
        address: req.body.address 
    });
    regiister.save()
        .then(() => {
            console.log("registered")
            console.log(regiister)
        })
        .catch(err => {
            console.log("Got an error")
            console.log(err)
        })
    res.redirect('/reports/reg/login');
 }); 
    
};

const login_new_user = (req, res) => {
    res.render('components/login')
};

const login_new_user_post = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
   Regiister.findOne({email:email})
   .then(regiister => {
    if(regiister){
        bcrypt.compare(password, regiister.password, function(err, result) {
            if(err) {
                console.log("error");
                console.log(err);
            }
            if(result) {
                let token = jwt.sign({email: regiister.email}, 'VerySecretValue', {expiresIn: '1h'})
                console.log("Login Successfully"),
                token
            }else{
                console.log("password doesnot match")
            }
        })
    }else{
        console.log("user not found")
    }

   

   })
   res.redirect('/reports/new');
    
}; 





module.exports = {
    register_new_user,
    register_new_user_post,
    login_new_user,
    login_new_user_post 
} 