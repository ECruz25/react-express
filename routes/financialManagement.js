const express = require('express');
const router = express.Router();
const accountController = require('../controllers/FinancialManagement/accountController');

router.get('/accounts', accountController.getAccounts);
router.get('/accounts/:id', accountController.getAccount);
router.get('/accounts/:id/delete', accountController.deleteAccount);
router.get('/accounts/:id/reset', accountController.resetAccount);
router.post('/accounts/register', accountController.registerAccount);

module.exports = router;
