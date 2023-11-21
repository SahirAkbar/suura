const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const accountsController = require('../controllers/accountController');

const passport = require('passport');
const validate = require('../MiddleWare/AuthenticateSchema');
const RegisterSchmea = require('../Schema/registerSchema')
const signupSchema = require("../Schema/signupSchema")
const upload = require('../MiddleWare/ImageUpload');
const userImageControler = require('../controllers/userImagesController')
// Route for the first page to enter email and password



// // Route for updating account settings
// router.post('/update-account/:id', validate(signupSchema), userController.updateAccountSettings);


// Route for updating account settings
router.post('/profile/:id', validate(signupSchema), accountsController.updateAccountProfile);

module.exports = router;
