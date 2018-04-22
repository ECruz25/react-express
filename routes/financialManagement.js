const express = require('express');
const router = express.Router();
const accountController = require('../controllers/FinancialManagement/accountController');

router.get('/accounts/:userId', accountController.getAccounts);
router.get('/accounts/:userId/:id', accountController.getAccount);
router.get('/accounts/:userId/:id/delete', accountController.deleteAccount);
router.get('/accounts/:userId/:id/reset', accountController.resetAccount);
router.post('/accounts/:userId/register', accountController.registerAccount);

module.exports = router;
