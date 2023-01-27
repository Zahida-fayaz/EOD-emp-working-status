const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');
const registerController = require('../controllers/registerController');

//all reports
router.get('/', reportController.all_reports);

//to new page
router.get('/new', reportController.reports_new);

//add data
router.post('/new', reportController.reports_new_post);

//show one
router.get('/:id',reportController.report_id);

//to edit page
router.get('/:id/edit',reportController.reports_id_edit);

//edit data and post it
router.post('/:id/update',reportController.reports_id_update);

//delte route
router.get('/:id/delete',reportController.reports_id_delete);

//get register page
router.get('/registers/signup', reportController.register_new_user_post);

//add user info
router.post('registers/signup', reportController.register_new_user_post);


module.exports = router