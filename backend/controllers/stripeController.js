const stripe = require('stripe')('sk_test_51OFXsgSHN5YSRcPqsSqnmYtTphhFZXrUxStd7dWqn2NDuFbYRZaANAMb5LAhN09zvrp7md4ofBuBVCnRyYjaeXVw00VZadOdtb');
const PayoutModel = require('../models/payoutModel'); // Assuming UserModel for user data storage

exports.linkStripeAccount = async (req, res) => {
  try {
    const { accountId, redirect_uri } = req.body;
    const userId = req.query.userId; // Extracting userId from query parameter

    if (!userId) {
      return res.status(400).json({ error: 'User ID is required.' });
    }

    // Update the user's stripe_account_id in the database
    await PayoutModel.update(
      { stripe_account_id: accountId, accept_stripe_payments: true }, // Update the fields accordingly
      { where: { id: userId } }
    );

    const accountLink = await stripe.accountLinks.create({
      account: accountId,
      refresh_url: redirect_uri,
      return_url: redirect_uri,
      type: 'account_onboarding',
    });

    res.status(200).json({ url: accountLink.url });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
