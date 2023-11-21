const express = require('express');
const router = express.Router();
const accountsController = require('../controllers/accountController');
const validate = require('../MiddleWare/AuthenticateSchema');
const EmailPreferencesSchema = require('../Schema/EmailPerfernceSchema');

// Route for updating account settings
router.post('/profile/:id', accountsController.updateAccountProfile);
router.post('/preferences/:id', validate(EmailPreferencesSchema),accountsController.preferences)
module.exports = router;
