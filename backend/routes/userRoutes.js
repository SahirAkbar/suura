const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const multer = require('multer');
const passport = require('passport');
const validate = require('../MiddleWare/AuthenticateSchema');
const RegisterSchmea = require('../Schema/registerSchema')
const signupSchema = require("../Schema/signupSchema")
// Route for the first page to enter email and password
router.post(
  "/register/email-password",
  validate(RegisterSchmea),
  userController.registerEmailPassword
);

// Route for the second page with additional user information
router.post(
  "/register/user-info/:id",
  validate(signupSchema),
  userController.registerUserInfo
);
// Route for image uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/uploads/'); // Create a folder 'uploads' for storing images
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname); // Use a unique filename
    },
  });
  
  const upload = multer({ storage: storage });
  
  // Route for uploading cover image and profile image
  router.post('/upload-images', upload.fields([{ name: 'cover_image', maxCount: 1 }, { name: 'profile_image', maxCount: 1 }]), userController.uploadImages);
  //instagram route
  // Route to initiate Instagram authentication
  router.get('/register/connect-instagram', passport.authenticate('instagram'));

// Route for handling Instagram callback
router.get('/register/connect-instagram/callback', passport.authenticate('instagram', {
  successRedirect: '/success', // Redirect to a success page
  failureRedirect: '/failure', // Redirect to a failure page
}), userController.connectInstagram)
//sessions offered by user route
router.post('/register/select-session', userController.selectSession);


// more routes to be added here

module.exports = router;
