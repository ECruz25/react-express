const mongoose = require('mongoose');
const MoneyManager = mongoose.model('MoneyManager');
const promisify = require('es6-promisify');

exports.addIncome = async (req, res) => {
  try {
    const moneyManager = new MoneyManager(req.body);
    await moneyManager.save(); 
    res.send('Success!');
  } catch (error) {
    res.send(error);
  }
};