const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController')

router.get("/report/show", reportController.report_list);

router.get("/report", reportController.report_add);

router.post("/report", reportController.report_add_post);

router.get("/report/:id/edit", reportController.report_id_edit);

router.post("/report/:id/edit", reportController.report_edit_post);

router.get('/report/:id/delete', reportController.report_delete);

module.exports = router;