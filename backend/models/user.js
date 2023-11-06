const db = require('../config/database');
const bcrypt = require('bcrypt');

// Function to validate email using a simple regular expression
const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
};

const createUser = (user, callback) => {
    const { email, password } = user;

    // Validate the email
    if (!validateEmail(email)) {
        return callback('Invalid email');
    }

    // Generating a salt and hash the password
    bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            return callback(err);
        }

        bcrypt.hash(password, salt, (err, hashedPassword) => {
            if (err) {
                return callback(err);
            }

            // Replace the plain password with the hashedPassword in the 'user' object
            user.password = hashedPassword;

            // Now, insert the user with the hashed password into the database
            db.query('INSERT INTO users SET ?', user, callback);
        });
    });
};


const updateUser = (email, userInfo, callback) => {
  db.query('UPDATE users SET ? WHERE email = ?', [userInfo, email], callback);
};
// ...

//const updateUserImages = (email, coverImage, profileImage, callback) => {
 //   db.query('UPDATE users SET cover_image = ?, profile_image = ? WHERE email = ?', [coverImage, profileImage, email], callback);
 //};
  const updateUserImages = (email, coverImage, profileImage, bio, callback) => {
    db.query('UPDATE users SET cover_image = ?, profile_image = ?, bio = ? WHERE email = ?', [coverImage, profileImage, bio, email], callback);
  };
  //-------------------------------------------
  // ...

const updateUserInstagram = (email, instagramProfile, callback) => {
    // Define the schema for storing Instagram data and update the user's record
    const updateData = {
      instagram_id: instagramProfile.id,
      Instagram_username: instagramProfile.username,
      full_name: instagramProfile.displayName,
      // Add other Instagram-related fields as needed
    };
  
    db.query('UPDATE users SET ? WHERE email = ?', [updateData, email], callback);
  };
  // ...

  const updateUserSelectedSessions = (email, selectedSessions, callback) => {
    const updateData = {
      selected_sessions: JSON.stringify(selectedSessions) // Assuming selected_sessions is a JSON column
    };
 
    db.query('UPDATE users SET ? WHERE email = ?', [updateData, email], callback);
 };
 

module.exports = {createUser, updateUser,updateUserImages,updateUserInstagram,
  updateUserSelectedSessions,
};

  
 // module.exports = { createUser, updateUser, updateUserImagesAndBio, updateUserInstagram };
  
  
 // module.exports = { createUser, updateUser, updateUserImages, updateUserInstagram };
  

//module.exports = { createUser, updateUser };
