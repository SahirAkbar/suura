const photographerController = require('../controllers/PhotographerController')
const router = require('express').Router();
router.get("/bylocation", photographerController.getByLocation);
router.get("/filter/date",photographerController.getByStartDate);
router.get("/filter/dateRange", photographerController.getBetweenDate);
module.exports = router;