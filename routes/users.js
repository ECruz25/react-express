var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const accountController = require('../controllers/FinancialManagement/accountController');

router.get('/accounts', accountController.getAccounts);
router.get('/accounts/:id', accountController.getAccount);
router.get('/accounts/:id/delete', accountController.deleteAccount);
router.get('/accounts/:id/reset', accountController.resetAccount);
router.post('/accounts/register', accountController.registerAccount);

/* GET users listing. */
router.get('/', (req, res, next) => {
  console.log(req.user);
  res.send('respond with a resource');
});
router.get('/logout', authController.logout, (req, res) => {
  res.send(200);
});

// router.post('/register', userController.register, authController.login);
router.post('/login', authController.login, (req, res) => {
  res.json(req.user._id);
});

module.exports = router;
