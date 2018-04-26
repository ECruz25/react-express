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
    const user2 = await User.findOne({ username: req.body.username });
    console.log(user2);
    if (user2) {
      console.log('entre aca');
      next();
    } else {
      console.log(req.body);
      const user = new User({
        username: req.body.username
      });
      console.log(user, user.email);
      const register = promisify(User.register, User);
      await register(user, req.body.password);
      console.log(user, user.email);
      next();
    }
  } catch (error) {
    console.log(error);
    return 500;
  }
};

exports.getUserById = async id => {
  return await User.findById(id);
};
