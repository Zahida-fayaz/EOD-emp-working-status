const { Router } = require('express');
const router = Router();
const adminController = require('../controllers/adminController')

// router.get('/admin', adminController.admin_dashboard)
router.get('/admin/reports', adminController.all_reports);

module.exports = router;