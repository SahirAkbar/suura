const userModel = require('../models/userModel');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const _ = require('lodash');
// Controller for the first page - entering email and password

exports.updateAccountProfile = async (req, res, next) => {
  const { currentPassword, newPassword, confirmPassword, ...otherAccountSettings } = req.body;
  const id = req.params.id;

  try {
    // Find the user record in the database based on the provided ID
    let record = await userModel.findByPk(id);

    // If the user record is found
    if (record) {
      // Validate the current password
      const isPasswordValid = await bcrypt.compare(currentPassword, record.password);

      if (isPasswordValid) {
        // Check if the new password and confirm password match
        if (newPassword !== confirmPassword) {
          return res.status(400).json({ message: 'New password and confirm password do not match' });
        }

        // If the current password is valid and new/confirm passwords match, update the account settings
        // Hash the new password if provided
        if (newPassword) {
          const hashedNewPassword = await bcrypt.hash(newPassword, 10);
          record.password = hashedNewPassword;
        }

        // Update other account settings
        record.set(otherAccountSettings);

        // Save the changes to the database
        let result = await record.save();

        // Respond with a success message and the updated result
        return res.status(200).json({ message: 'Account settings updated successfully', result });
      } else {
        // If the current password is not valid, respond with a 401 Unauthorized status
        return res.status(401).json({ message: 'Invalid current password' });
      }
    } else {
      // If the user record is not found, respond with a 404 error
      return res.status(404).json({ message: 'Invalid id' });
    }
  } catch (error) {
    // If an error occurs during the process, pass it to the next middleware
    next(error);
  }
};