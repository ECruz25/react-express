var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});
router.get('/logout', authController.logout, (req, res) => {
  res.send(200);
});

router.post(
  '/register',
  userController.register,
  authController.login,
  (req, res) => {
    res.json(req.user._id);
  }
);
router.post('/login', authController.login, (req, res) => {
  res.json(req.user._id);
});

module.exports = router;
