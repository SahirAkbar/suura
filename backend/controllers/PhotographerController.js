const { Op ,literal} = require('sequelize');
const UserPreferences = require('../models/UserPreference');
const userModel = require('../models/userModel');
const moment = require('moment')
exports.getByLocation = async (req, res, next) => {
  try {
    let { state, city } = req.query;
    
    let photographers = await userModel.findAll({where:{ state, city }});
    return res.status(200).json(photographers)
  } catch (error) {
    next(error)
  }
}
exports.getByStartDate = async (req, res, next) => {
  try {
    let { date } = req.query;
    const Date = new moment(date);
    const newDate = Date.add(30, "days");
    let photographers = await UserPreferences.findAll({
      where: {
        accepts_clients: true,
        accepting_clients_from: {
          [Op.lte]: newDate
        }
      },
    });
    return res.json(photographers);
  } catch (error) {
    console.log(error)
    next(error)
  }
};
exports.getBetweenDate = async (req, res, next) => {
  try {
    const { startDate, endDate } = req.query;
    const newStartDate = new moment(startDate);
    const newEndDate = new moment(endDate);
    if (newStartDate < newEndDate) {
      
      let photographers = await UserPreferences.findAndCountAll({
        where: {
          [Op.and]: [
            literal(`accepting_clients_from + INTERVAL 30 DAY >= :newEndDate`),
            literal(`accepting_clients_from <= :newStartDate`),
          ],
        },
        replacements: {
          newStartDate: newStartDate.toDate(),
          newEndDate: newEndDate.toDate(),
        },
      });
      if (photographers.count > 0) {
        
        return res.status(200).json({message:'Found phtographers between specific data range',photographers});
      } else {
        return res.status(200).json({message:'No records found'})
      }
    } else {
      return res.status(400).send('Start date should be less than End Date')
    }
  } catch (error) {
    console.log(error)
    next(error)
  }
}