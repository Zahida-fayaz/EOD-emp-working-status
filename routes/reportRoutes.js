const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');


//all reports
router.get('/', reportController.all_reports);

//to new page
router.get('/new', reportController.reports_new);

//add data
router.post('/new', reportController.reports_new_post);

//show one
router.get('/:id/show',reportController.report_id);

//to edit page
router.get('/:id/edit',reportController.reports_id_edit);

//edit data and post it
router.post('/:id/update',reportController.reports_id_update);

//delte route
router.get('/:id/delete',reportController.reports_id_delete);

module.exports = router