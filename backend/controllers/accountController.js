const userModel = require('../models/userModel');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const _ = require('lodash');
var createError = require("http-errors");
// Controller for the first page - entering email and password

exports.updateAccountProfile = async (req, res, next) => {
  const { currentPassword, newPassword, confirmPassword, ...otherAccountSettings } = req.body;

  try {
    let record = req.user;
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
    
  } catch (error) {
    // If an error occurs during the process, pass it to the next middleware
    next(error);
  }
};
exports.preferences = async (req, res, next) => {

  try {
    let { preferences } = req.body;
    console.log(preferences,"Prefereneces")
    let record =req.user;
    if (record) {
      record.set({
        preferences: preferences
      });
      let result =await record.save();
      return res.status(200).json({ message: 'Updated Successfully' ,result});
    } else {
      return res.status(401).json("invalid Id");
    }
  } catch (error) {
    console.log(error)
    next(error)
  }
}
exports.getEmailPreferences = async (req, res, next) => {
  try {
    let user = req.user;
    if (user) {
        return res
          .status(200)
          .json({
            message: "Found Successullfy",
            preferences: user.preferences,
          });
    } else {
      throw createError(404,'User not Found!!!')
    }
    
  } catch (error) {
    console.log(error);
    next(error);
  }
};
exports.getUserInfo = async (req, res, next) => {
  try {
    let user = req.user;
    if (user) {
        return res.status(200).json({message: 'Found Successfully!!',userinfo:user})
    } else {
      throw createError(404,'User not found')
    }
  } catch (error) {
    next(error)
  }
}