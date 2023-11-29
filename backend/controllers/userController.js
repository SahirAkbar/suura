const userModel = require('../models/userModel');
const PayoutModel = require('../models/payoutModel');
const Userpreferences= require('../models/UserPreference');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const _ = require('lodash');
var createError = require("http-errors");
const { Op } = require('sequelize');
const UserPreferences = require('../models/UserPreference');
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
// exports.updateWorkPreference = async (req, res) => {
//   try {
//     const { id } = req.query; // Extracting user ID from query parameters

//     // Check if the user exists in the User table
//     const existingUser = await userModel.findByPk(id);
//     if (existingUser) {
//       const { accepts_clients, availability_reminders, hourly_rate, time_zones, extended_hours, languages, proficiency_level   } = req.body;
//       // Find or create a payout record for the specific photographer ID
//     let preferences = await UserPreferences.findOrCreate({ where: { UserId: id } });
//       // Update the work preferences for the specific user ID in the UserPreferences table

//     await preferences[0].update({accepts_clients, availability_reminders, hourly_rate, time_zones, extended_hours, languages, proficiency_level });
//       if (preferences) {
//         // Fetch and send updated user preferences in the response
//         res.status(200).json(preferences);
//       } else {
//         res.status(500).json({ message: 'Failed to update user preferences' });
//       }
//     } else {
//       res.status(404).json({ message: 'User not found for the entered ID' });
//     }
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };
// exports.updateWorkPreference = async (req, res) => {
//   try {
//     const { id } = req.query; // Extracting user ID from query parameters

//     // Check if the user exists in the User table
//     const existingUser = await userModel.findByPk(id);
//     if (!existingUser) {
//       return res.status(404).json({ message: 'User not found for the entered ID' });
//     }

//     const {
//       accepts_clients,
//       availability_reminders,
//       hourly_rate,
//       time_zones,
//       extended_hours,
//       languages,
//       proficiency_level,
//     } = req.body;

//     // Find or create UserPreferences for the specific user ID
//     const [preferences, created] = await UserPreferences.findOrCreate({
//       where: { UserId: id },
//       defaults: {
//         // Set default values if the record is created
//         accepts_clients,
//         availability_reminders,
//         hourly_rate,
//         time_zones,
//         extended_hours,
//         languages,
//         proficiency_level,
//       },
//     });

//     if (!preferences) {
//       return res.status(500).json({ message: 'Failed to update user preferences' });
//     }

//     if (!created) {
//       // If the record already exists, update the preferences
//       await preferences.update({
//         accepts_clients,
//         availability_reminders,
//         hourly_rate,
//         time_zones,
//         extended_hours,
//         languages,
//         proficiency_level,
//       });
//     }

//     // Fetch and send updated user preferences in the response
//     res.status(200).json(preferences);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };
 


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

exports.addPaymentDetails = async (req, res) => {
  try {
    const { cash, bank_name, IBAN, routing_number, bank_code, paypal_details } = req.body;
    const { id } = req.query; // Extracting photographer ID from query parameters

    // Find or create a payout record for the specific photographer ID
    let payout = await PayoutModel.findOrCreate({ where: { UserId: id } });

    // Update the payout details for the specific photographer ID in the database
    await payout[0].update({ cash, bank_name, IBAN, routing_number, bank_code, paypal_details });

    // Fetch and send updated photographer details in the response
    const updatedPhotographer = await userModel.findByPk(id, { include: PayoutModel });
    res.status(200).json(updatedPhotographer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.getUserPreferences = async (req, res) => {
  try {
    const { id } = req.query; // Extracting user ID from query parameters

    // Check if the user exists in the User table
    const existingUser = await userModel.findByPk(id);
    if (!existingUser) {
      return res.status(404).json({ message: 'User not found for the entered ID' });
    }

    // Find UserPreferences for the specific user ID
    const preferences = await UserPreferences.findOne({ where: { UserId: id } });

    if (!preferences) {
      return res.status(404).json({ message: 'Preferences not found for the user' });
    }

    const acceptsClients = preferences.accepts_clients;
    if (!acceptsClients) {
      return res.status(200).json({ message: 'Currently Photographer is not accepting clients' }); // If negative, photographer has passed the 30-day period

    }
    let daysRemaining = null;

    if (acceptsClients) {
      // Calculate the number of days remaining for accepting clients
      const createdAt = preferences.createdAt; // Assuming createdAt is the field storing the creation date

      const currentDate = new Date();
      const thirtyDaysLater = new Date(createdAt);
      thirtyDaysLater.setDate(thirtyDaysLater.getDate() + 30);

      const diffTime = thirtyDaysLater.getTime() - currentDate.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Convert milliseconds to days

      if (diffDays >= 0) {
        daysRemaining = diffDays;
      } else {
        return res.status(200).json({ message: 'Currently Photographer is not accepting clients' }); // If negative, photographer has passed the 30-day period
      }
    }

    // Prepare response with preferences and days remaining
    const response = {
      preferences,
      daysRemaining,
    };

    return res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ error: err.message });
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

exports.updateWorkPreference = async (req, res, next) => {
  try {
    const existingUser = req.user;
    if (!existingUser) {
      return res
        .status(404)
        .json({ message: "User not found for the entered ID" });
    }
    const id = existingUser.dataValues.id;
    const { accepts_clients, availability_reminders } = req.body;
    console.log(accepts_clients, availability_reminders, " is from body");
    // Find or create UserPreferences for the specific user ID
    const [preferences, created] = await UserPreferences.findOrCreate({
      where: { UserId: id },
      options: {
        upsert: true,
      },
      defaults: {
        accepts_clients,
        availability_reminders,
        accepting_clients_from: accepts_clients ? new Date() : null, // Update accepting_clients_from if accepts_clients is true
      },
    });
    if (!preferences) {
      return res
        .status(500)
        .json({ message: "Failed to update user preferences" });
    }
    if (!created) {
      // If the record already exists and accepts_clients is being updated
      if (accepts_clients !== preferences.accepts_clients) {
        await preferences.update({
          accepts_clients,
          availability_reminders,
          
          accepting_clients_from: accepts_clients
            ? new Date()
            : preferences.accepting_clients_from, // Update accepting_clients_from only if accepts_clients is true and retain its previous value otherwise
        });
      } else {
        // If accepts_clients remains unchanged or is false, update other preferences without affecting accepting_clients_from
        await preferences.update({
          accepts_clients,
          availability_reminders,
          accepting_clients_from: accepts_clients
            ? new Date()
            : preferences.accepting_clients_from, // Update accepting_clients_from only if accepts_clients is true and retain its previous value otherwise
        });
      }
    }
    // Fetch and send updated user preferences in the response
    res.status(200).json(preferences);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};