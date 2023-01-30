const { Router } = require('express');
const router = Router();
const authController = require('../controllers/authController')

//signup page
router.get('/signup', authController.signup_get);

//post data of the user in the db
router.post('/signup', authController.signup_post);

// login page
router.get('/login', authController.login_get);

//authenticate a current user
router.post('/login', authController.login_post);

//logout the current user
router.get('/logout',authController.logout_get)

module.exports = router;