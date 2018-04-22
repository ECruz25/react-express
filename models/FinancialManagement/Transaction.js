const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const transactionSchema = new Schema({
  account: {
    type: mongoose.Schema.ObjectId,
    ref: 'Account',
    required: 'You must specify an account'
  },
  description: {
    type: String,
    trim: true
  },
  amount: {
    type: Number,
    default: 0
  },
  date: {
    type: Date
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: 'You must login'
  }
});

module.exports = mongoose.model('Transaction', transactionSchema);
