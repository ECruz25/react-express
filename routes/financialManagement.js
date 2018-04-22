const express = require('express');
const router = express.Router();
const accountController = require('../controllers/FinancialManagement/accountController');
const transactionController = require('../controllers/FinancialManagement/transactionsController');

router.get('/accounts/:userId', accountController.getAccounts);
router.get('/accounts/:userId/:id', accountController.getAccount);
router.get('/accounts/:userId/:id/reset', accountController.resetAccount);
router.get(
  '/accounts/:userId/:id/transactions',
  transactionController.getTransactions
);
router.post('/accounts/:userId/register', accountController.registerAccount);
router.post(
  '/accounts/:userId/transactions/register/transfer',
  transactionController.registerTransferTransaction
);
router.delete('/accounts/:userId/:id/delete', accountController.deleteAccount);

module.exports = router;
