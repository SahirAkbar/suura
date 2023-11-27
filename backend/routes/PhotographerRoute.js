const photographerController = require('../controllers/PhotographerController')
const router = require('express').Router();
router.get("/bylocation", photographerController.getByLocation);
module.exports = router;