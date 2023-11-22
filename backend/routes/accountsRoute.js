const express = require('express');
const router = express.Router();
const accountsController = require('../controllers/accountController');
const validate = require('../MiddleWare/AuthenticateSchema');
const EmailPreferencesSchema = require('../Schema/EmailPerfernceSchema');
const updateProfileSchema = require('../Schema/Profile/updateProfile');

// Route for updating account settings
router.post('/profile', accountsController.updateAccountProfile);
router.post('/preferences', validate(EmailPreferencesSchema), accountsController.preferences)
router.get("/preferences", accountsController.getEmailPreferences);
router.get('/profile',accountsController.getUserInfo)
router.post("/profile/update",validate(updateProfileSchema) ,accountsController.updateUserInfo);
module.exports = router;
