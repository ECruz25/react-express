const mongoose = require('mongoose');
const Transaction = mongoose.model('Transaction');
const promisify = require('es6-promisify');
const moment = require('moment');

exports.registerTransaction = async (req, res, next) => {
  try {
    req.body.date = moment().format('YYYY-MM-DD hh:mm:ss');
    const transaction = new Transaction(req.body);
    await transaction.save();
    res.send(200);
  } catch (error) {
    console.log(500);
    res.send(error);
  }
};
