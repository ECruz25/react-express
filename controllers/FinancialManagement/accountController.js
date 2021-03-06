const mongoose = require('mongoose');
const promisify = require('es6-promisify');
const moment = require('moment');
const Account = mongoose.model('Account');
const User = mongoose.model('User');
const { getUserById } = require('../userController');

exports.registerAccount = async (req, res) => {
  try {
    const owner = await User.findById(req.body.owner);
    req.body.owner = owner;
    const account = new Account(req.body);
    await account.save();
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

exports.resetAccount = async (req, res) => {
  try {
    const account = await Account.findById(req.body.id);
    account.balance = 0;
    await account.save();
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

exports.deleteAccount = async (req, res) => {
  try {
    await Account.findByIdAndRemove(req.params.id);
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

exports.getAccounts = async (req, res) => {
  try {
    const accounts = await Account.find({ owner: req.params.userId });
    res.json(accounts);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

exports.getAccount = async (req, res) => {
  try {
    const account = await Account.find({
      _id: req.params.id,
      owner: req.params.userId
    });
    res.json(account);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};
