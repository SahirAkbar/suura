const jwt = require("jsonwebtoken");
const UserModel = require("../models/userModel");

async function authenticateToken(req, res, next) {
  try {
    
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    console.log(token)
    if (!token) {
      return res.status(401).json({ error: "Unauthorized - Missing token" });
    }
    
    let user =await jwt.verify(token, "shhhhh");
    
    if (!user) {
      return res.status(401).json({message:'invalid Token'})
    }
    console.log(user);
    console.log(user.id, " is id")
    let userRecord = await UserModel.findByPk(user.id)
    console.log(userRecord, " is user Record")
    if (userRecord) {
      req.user = userRecord;
      next();
       
    }
    else {
      return res.status(404).json({message:'User not Found!!!'})
    }
      // Attach the user object to the request for further processing
  } catch (error) {
    console.log(error)
    next(error)
  }
   
}

module.exports = authenticateToken;
