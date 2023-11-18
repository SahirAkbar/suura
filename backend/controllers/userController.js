const userModel = require('../models/userModel');
const bcrypt = require('bcrypt')
// Controller for the first page - entering email and password
exports.registerEmailPassword =async (req, res,next) => {
  const { email, password } = req.body; // Assuming you're using body-parser
  const userData = { email, password };
  const hashedPassword = bcrypt.hashSync(password, 10);
  userData.password = hashedPassword
  try {
    let response = await userModel.create(userData)
    res.status(200).json({message:'Success',response})
  } catch (error) {
    console.log(error)
    next(error)
  }
};
// Controller for the second page with additional user information
exports.registerUserInfo = async(req, res,next) => {
  const userInfo = req.body; // Assuming you're using body-parser
  const id = req.params.id;
  try {
    let record = await userModel.findByPk(id);
    if (record) {
      record.set(userInfo)
      let result = await record.save();
      return res.status(200).json({message:'Updated Successfully',result})
    } else {
      return res.status(404).json({message:'Invalid id '})
    }
  } catch (error) {
    next(error)
  }
};
//controller for image upload
exports.uploadImages = async (req, res,next) => {
  const id = req.params.id;
  const { cover_image, profile_image } = req.files;
  const coverImagePath = cover_image[0].path;
  const profileImagePath = profile_image[0].path;
  const bio = req.body.bio;
  console.log(req.files)
 try {
    let record = await userModel.findByPk(id);
    if (record) {
      record.set({
        cover_image: coverImagePath,
        profile_image:profileImagePath,
        bio,
      });
      let result = await record.save();
      return res.status(200).json({message:'Updated Successfully',result})
    } else {
      return res.status(404).json({message:'Invalid id '})
    }
  } catch (error) {
    next(error)
  }
  
};
// Controller for handling Instagram connection callback
exports.connectInstagram = (req, res) => {
  // Access the Instagram profile from the 'req.user' object
  const instagramProfile = req.user;
  // Save the Instagram user profile information to your database
  userModel.updateUserInstagram(req.body.email, instagramProfile, (error, results) => {
    if (error) {
      console.error('Error: ' + error.message);
    return  res.status(500).json({message: 'Error connecting Instagram account'});
    } else {
   return    res.status(200).json({ message: 'Instagram account connecte  d successfully' });
    }
  });
};
 
// Controller for selecting the user's preferred session
exports.selectSession = (req, res) => {
  const { email, selectedSessions } = req.body;
  // Assuming you have a function to update the user's profile with the selected sessions
  userModel.updateUserSelectedSessions(email, selectedSessions, (error, results) => {
    if (error) {
      console.error('Error: ' + error.message);
   return    res.status(500).json({message: 'Error updating selected sessions'});
    } else {
 return      res.status(200).json({ message: 'Selected sessions updated successfully' });
    }
  });
};