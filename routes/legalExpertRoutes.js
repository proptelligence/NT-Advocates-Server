const express = require('express');
const router = express.Router();
const legalExpertController = require('../controllers/legalExpertController');

router.post('/submit-form', legalExpertController.submitForm);

module.exports = router;
