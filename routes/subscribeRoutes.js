const express = require('express');
const router = express.Router();
const emailController = require('../controllers/emailController');

// POST /subscribe
router.post('/subscribe', emailController.subscribe);

module.exports = router;
