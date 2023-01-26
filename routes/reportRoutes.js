const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');

//all reports
router.get('/reports', reportController.all_reports);

//to new page
router.get('/reports/new', reportController.reports_new);

//add data
router.post('/reports/new', reportController.reports_new_post);

//show one
router.get('/reports/:id',reportController.report_id);

//to edit page
router.get('/reports/:id/edit',reportController.reports_id_edit);

//edit data and post it
router.post('/reports/:id/update',reportController.reports_id_update);

//delte route
router.get('/reports/:id/delete',reportController.reports_id_delete);

module.exports = router