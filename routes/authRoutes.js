const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');


//get register page
router.get('/signup', authController.register_new_user);

//add user info
router.post('/signup', authController.register_new_user_post);

router.get('/login', authController.login_new_user);

module.exports = router