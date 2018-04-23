const mongoose = require('mongoose');
const Transaction = mongoose.model('Transaction');
const Account = mongoose.model('Account');
const promisify = require('es6-promisify');
const moment = require('moment');

exports.getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({
      user: req.params.userId,
      account: req.params.id
    });
    res.json(transactions);
  } catch (error) {}
};

exports.registerTransaction = async (req, res) => {
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

exports.registerTransferTransaction = async (req, res, next) => {
  try {
    const account1 = await Account.findById(req.body.fromAccount);
    const account2 = await Account.findById(req.body.toAccount);
    if (account1.balance >= req.body.amount) {
      const description = `Transfer the amount of ${req.body.amount} from ${
        account1.accountName
      } to ${account2.accountName}`;

      const date = moment().format('YYYY-MM-DD hh:mm:ss');
      const balance1 = account1.balance;
      account1.balance = balance1 - req.body.amount;
      await account1.save();
      const balance2 = account2.balance;
      account2.balance = balance2 + req.body.amount;
      await account2.save();

      const transaction1 = new Transaction({
        account: req.body.fromAccount,
        description,
        amount: req.body.amount * -1,
        date,
        user: req.body.user
      });

      const transaction2 = new Transaction({
        account: req.body.toAccount,
        description,
        amount: req.body.amount,
        date,
        user: req.body.user
      });

      await transaction1.save();
      await transaction2.save();
      res.send(200);
    }
  } catch (error) {
    console.log(error);
  }
};
