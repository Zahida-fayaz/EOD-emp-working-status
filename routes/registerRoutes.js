const express = require('express');
const router = express.Router();

const registerController = require('../controllers/registerController');


//get register page
router.get('/registers/signup', reportController.register_new_user_post);

//add user info
router.post('registers/signup', reportController.register_new_user_post);
module.exports = router