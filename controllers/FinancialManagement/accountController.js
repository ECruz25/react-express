const mongoose = require('mongoose');
const Account = mongoose.model('Account');
const User = mongoose.model('User');
const promisify = require('es6-promisify');
const moment = require('moment');
const { getUserById } = require('../userController');

exports.registerAccount = async (req, res) => {
  try {
    const owner = await User.findById(req.body.owner);
    req.body.owner = owner;
    console.log(req.body);
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
    const account = await Account.findByIdAndRemove(req.body.id);
    await account.remove().exec();
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

exports.getAccounts = async (req, res) => {
  try {
    //algun dia tendre que cambiar esto para que solo muestre las de el usuario logueado
    const accounts = await Account.find();
    res.json(accounts);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

exports.getAccount = async (req, res) => {
  try {
    const account = await Account.findById({ owner: req.user });
    res.json(account);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};
