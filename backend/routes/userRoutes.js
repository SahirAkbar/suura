const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

const passport = require('passport');
const RegisterSchmea = require('../Schema/registerSchema')
const signupSchema = require("../Schema/signupSchema")
const upload = require('../MiddleWare/ImageUpload');
const userImageControler = require('../controllers/userImagesController');
const authenticateToken = require('../MiddleWare/authenticate')
const validate = require('../MiddleWare/AuthenticateSchema');
const searchByUsernameSchema = require('../Schema/Photographer/SearchByusername')
// Route for the first page to enter email and password
router.post(
  "/register/email-password",
  validate(RegisterSchmea),
  userController.registerEmailPassword
);
router.post(
  "/login",
  validate(RegisterSchmea),
  userController.userLogin
);
// Route for the second page with additional user information
router.post(
  "/register/user-info",authenticateToken,
  validate(signupSchema),
  userController.registerUserInfo
);
// Route for image uploads

  
  // Route for uploading cover image and profile image
  router.post('/upload-images',authenticateToken, upload.fields([{ name: 'cover_image', maxCount: 1 }, { name: 'profile_image', maxCount: 1 }]), userController.uploadImages);
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

router.post(
  "/ShowCase",authenticateToken,
  upload.fields([
    { name: "fashion", maxCount: 16 },
    { name: "wedding", maxCount: 16 },
  ]),
  userImageControler.showCase
);


router.post("/serviceOffer",authenticateToken, userImageControler.servicesOffers);




router.post("/work_preference", userController.updateWorkPreference);
router.get("/work_preference", userController.getUserPreferences);
router.post("/payment", userController.addPaymentDetails);
// router.post("/service_preference", userController.updateServicePreference);
// router.post("/profile_language", userController.updateProfileLanguage);

//Suura -93 Search By name
router.get(
  "/search/username",
  validate(searchByUsernameSchema),
  userController.searchByUsername
);
router.get(
  "/search/username/partial",
  validate(searchByUsernameSchema),
  userController.searchByPartialUsername
);
router.get(
  "/search/username/prefix",
  validate(searchByUsernameSchema),
  userController.searchbyusernamePrefix
);
router.get(
  "/search/username/suffix",
  validate(searchByUsernameSchema),
  userController.searchbyusernameSuffix
);


//Suura -95 ticket
router.get("/profile/details", authenticateToken,userController.getProfileDetails);

module.exports = router;
