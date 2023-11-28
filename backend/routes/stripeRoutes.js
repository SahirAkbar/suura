// In your stripeRoutes.js file
const express = require('express');
const router = express.Router();
const stripeController = require('../controllers/stripeController');

router.post('/link_stripe_account', stripeController.linkStripeAccount);

module.exports = router;
