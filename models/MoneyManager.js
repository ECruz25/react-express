const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const moneyManagerSchema = new mongoose.Schema({
  amount: {
    type: Number,
  },
  reason: {
    type: String,
  },
})

module.exports = mongoose.model('MoneyManager', moneyManagerSchema);