const userModel = require('../models/userModel');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const _ = require('lodash');
var createError = require("http-errors");
const { Op } = require('sequelize');
// Controller for the first page - entering email and password
exports.registerEmailPassword =async (req, res,next) => {
  const { email, password } = req.body; 
  const userData = { email, password };
  const hashedPassword = bcrypt.hashSync(password, 10);
  userData.password = hashedPassword
  try {
    let user = await userModel.create(userData);
     const userRecord = user.dataValues;
     const userValues = _.omit(userRecord, "password");
     var token = jwt.sign(userValues, "shhhhh");
    res.status(200).json({ message: "Success", token,userInfo: userValues });
  } catch (error) {
    console.log(error)
    next(error);
  }
};
// Controller for the second page with additional user information
exports.registerUserInfo = async(req, res,next) => {
  const userInfo = req.body; // Assuming you're using body-parser
  try {
    let record =req.user;
    if (record) {
      record.set(userInfo)
      let result = await record.save();
      return res.status(200).json({message:'Updated Successfully',result})
    } else {
      throw createError(401, "User Not Found!!")
    }
  } catch (error) {
    next(error)
  }
};
//controller for image upload
exports.uploadImages = async (req, res,next) => {
  try {
  const { cover_image, profile_image } = req.files;
  const coverImagePath = cover_image[0].path;
  const profileImagePath = profile_image[0].path;
  const bio = req.body.bio;
    let record = req.user;
    if (record) {
      record.set({
        cover_image: coverImagePath,
        profile_image:profileImagePath,
        bio,
      });
      let result = await record.save();
      return res.status(200).json({message:'Updated Successfully',result})
    } else {
      return res.status(404).json({message:'User not found'})
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
exports.userLogin = async (req, res, next) => {
  const { email,password} = req.body
  try {
    let user = await userModel.findOne({ where: { email } })
    if (user) {
      if (bcrypt.compareSync(password, user.password)) {
        console.log("matched")
        const userRecord = user.dataValues;
        const userValues = _.omit(userRecord, "password");
        var token = jwt.sign(userValues, "shhhhh");
        return res
          .status(200)
          .json({  token, userValues });
      } else {
        return res.status(401).json({ message: "Incorrect Password"  });
      }
    }
    else {
      return res.status(404).json({message:'Invalid Email Address'})
    }
  } catch (error) {
    console.log(error)
    next(error)
  }
};
exports.updateWorkPreference = async (req, res) => {
  try {
    const { id } = req.query; // Extracting photographer ID from query parameters

    const { accepts_clients, availability_reminders} = req.body;

    // Update the work preferences for the specific photographer ID in the database
    await userModel.update(
      { accepts_clients, availability_reminders },
      { where: { id } }
    );

    // Fetch and send updated photographer details in the response
    const updatedPhotographer = await userModel.findByPk(id);
    if(updatedPhotographer != null){
      updatedPhotographer.password="password is hidden";

      res.status(200).json(updatedPhotographer);
    }
    else{
      res.status(400).json({message: "Resource not found on the id you entered"})
    }  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.updateServicePreference = async (req, res) => {
  try {
    const { hourly_rating, time_zone, extended_hours } = req.body;
    const { id } = req.query; // Extracting photographer ID from query parameters

    // Update the service preferences for the specific photographer ID in the database
    await userModel.update(
      { OfferServices: { hourly_rating, time_zone, extended_hours } },
      { where: { id } }
    );

    // Fetch and send updated photographer details in the response
    const updatedPhotographer = await userModel.findByPk(id);
    if(updatedPhotographer != null){
      updatedPhotographer.password="password is hidden";
      res.status(200).json(updatedPhotographer);
    }
    else{
      res.status(400).json({message: "Resource not found on the id you entered"})
    }  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.updateProfileLanguage = async (req, res) => {
  try {
    const { languages, proficiency_level } = req.body;
    const { id } = req.query; // Extracting photographer ID from query parameters

    // Update the profile language preferences for the specific photographer ID in the database
    await userModel.update(
      { languages, proficiency_level },
      { where: { id } }
    );

    // Fetch and send updated photographer details in the response
    const updatedPhotographer = await userModel.findByPk(id);
    if(updatedPhotographer != null){
      updatedPhotographer.password="password is hidden";
      res.status(200).json(updatedPhotographer);
    }
    else{
      res.status(400).json({message: "Resource not found on the id you entered"})
    }
    
   // res.status(200).json(updatedPhotographer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.searchByUsername = async (req, res, next) => {
  try {
    let { username } = req.query;
    console.log(username)
    let response = await userModel.findAndCountAll({ where: { username: username } });
    console.log(response)
    if (response.count > 0) {
      
      return res.status(200).json(response)
    }
    return res.status(200).json({message:'No Records found'})
 } catch (error) {
  next(error)
 }
}
exports.searchByPartialUsername = async (req, res, next) => {
   try {
     let { username } = req.query;
     let queryUsername = `%${username}%`;
     console.log(queryUsername)
     let response = await userModel.findAndCountAll({
       where: { username: { [Op.like]: queryUsername } },
     });
     console.log(response);
     if (response.count > 0) {
       return res.status(200).json(response);
     }
     return res.status(200).json({ message: "No Records found" });
   } catch (error) {
     next(error);
   }
}
exports.searchbyusernamePrefix = async (req, res, next) => {
  try {
    let { username } = req.query;
  
    let response = await userModel.findAndCountAll({
      where: { username: { [Op.startsWith]: username } },
    });
    console.log(response);
    if (response.count > 0) {
      return res.status(200).json(response);
    }
    return res.status(200).json({ message: "No Records found" });
  } catch (error) {
    next(error);
  }
};
exports.searchbyusernameSuffix = async (req, res, next) => {
  try {
    let { username } = req.query;
    console.log("Called with username : ",username)
    
    let response = await userModel.findAndCountAll({
      where: { username: { [Op.endsWith]: username } },
    });
    console.log(response);
    if (response.count > 0) {
      return res.status(200).json(response);
    }
    return res.status(200).json({ message: "No Records found", });
  } catch (error) {
    console.log(error)
    next(error);
  }
};
exports.getProfileDetails = async (req, res, next) => {
  try {
    let user = req.user.dataValues;
    if (user) {
      const userRecord = _.omit(user, [
        "id",
        "email",
        "password",
        "currency",
        "time_zones",
        "extended_hours",
        "languages",
        "proficiency_level",
        "instagram_username",
        "full_name",
        "state",
        "city",
        "user_id",
      
      ]);
      console.log(req.user);
      return res.json({ user: userRecord });
    } else {
      return res.status(404).json({ message: 'Record not found!!!' });
    }
  } catch (error) {
    next(error)
  }
}