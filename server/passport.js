const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const db = require('../database/index');

// when the user logs in the back end creates a token and returns it in a response
// the client saves the token locally {localStorage} and sends it back every subsequent
  // request that needs auth
// all the requests needing auth pass through a middlewear that checks the token and allows it
  // if the token is verified

passport.use(new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
}, (username, password, callback) => {
  db.findOne({ username, password })
    .then((user) => {
      if (!user) {
        return callback(null, false, { message: 'Incorrect username or password' });
      }
      return callback(null, user, { message: 'logged in successfully' });
    })
    .catch((err) => {
      callback(err);
    });
}));
