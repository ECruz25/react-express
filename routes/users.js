var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/logout', authController.logout, (req, res) => {
  res.redirect('/app');
});

// router.post('/register', userController.register, authController.login);
router.post('/login', authController.login, (req, res) => {
  res.send('success');
});

module.exports = router;
