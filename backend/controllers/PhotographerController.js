const userModel = require('../models/userModel')
exports.getByLocation = async (req, res, next) => {
  console.log("Location url found")
  try {
    let { state, city } = req.params;
    
    let photographers = await userModel.findAll({ state, city });
    return res.status(200).json(photographers)
  } catch (error) {
    next(error)
  }
}