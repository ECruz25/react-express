const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const accountSchema = new Schema({
  accountName: {
    type: String,
    required: 'Please enter a name for the account',
    trim: true,
    unique: true
  },
  balance: {
    type: Number,
    default: 0
  },
  owner: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: 'Please login'
  }
});

module.exports = mongoose.model('Account', accountSchema);
