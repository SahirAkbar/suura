const photographerController = require('../controllers/PhotographerController')
const router = require('express').Router();

router.get("/bylocation/:state/:city", photographerController.getByLocation);
module.exports = router;