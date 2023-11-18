const UserImagesModel = require("../models/UserImages");
const UserModel = require("../models/userModel");

exports.showCase = async (req, res, next) => {
    const id = req.params.id;
    
  try {
    const imagesList=[]
    for (let files in req.files) {
      console.log(files)
      if (Array.isArray(req.files[files])) {
        const filesArray = req.files[files]
        for (let file of filesArray) {
          imagesList.push({ image_url: file.filename, image_type :file.fieldname,user_id:id});
        }
      }
    }
    let response = await UserImagesModel.bulkCreate(imagesList)
    
      return res.json(response);
  } catch (error) {
    next(error)
  }
}
exports.servicesOffers = async (req, res, next) => {
  try {
    const {Services,Offers } = req.body;
    let user =await UserModel.findByPk(req.params.id);
    if (user) {
      user.set({ AskServices: Services, OfferServices: Offers });    
      let result = await user.save()
      return res.status(200).json({ message: 'Updated Successully!!', result });
    } else {
      return res.status(404).json({ message: 'Invalid User Id' });
    }
  } catch (error) {
    next(error);
  }
}