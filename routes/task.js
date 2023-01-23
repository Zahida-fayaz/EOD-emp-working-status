const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController')
router.get("/show", reportController.report_list );

router.get("/",reportController.report_add);

router.post("/", reportController.report_add_post);

module.exports = router;