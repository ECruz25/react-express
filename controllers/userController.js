const mongoose = require('mongoose');
const User = mongoose.model('User');
const promisify = require('es6-promisify');

exports.loginForm = (req, res) => {
  res.render('login', { title: 'Login' });
};

exports.registerForm = (req, res) => {
  res.render('register', { title: 'Register' });
};

exports.register = async (req, res, next) => {
  try {
    console.log(req.body);
    const user = new User({
      username: req.body.username
    });
    console.log(user);
    const register = promisify(User.register, User);
    await register(user, req.body.password);
    next();
  } catch (error) {
    console.log(error);
  }
};
