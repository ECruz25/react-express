const express = require('express');
const router = express.Router();
const moneyManagerController = require('../controllers/moneyManagerController');

router.post('/addIncome', moneyManagerController.addIncome);
router.post('/addExpense', moneyManagerController.addExpense);


module.exports = router;
