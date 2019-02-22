const express = require('express');

const app = express();
const session = require('express-session');

const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
<<<<<<< HEAD
const FileStore = require('session-file-store')(session);
const uuid = require('uuid/v4');
const bcrypt = require('bcrypt');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const local = require('passport');
=======
const bcrypt = require('bcrypt');
>>>>>>> 2ccc14d53861cd7e1580e63a62661a66b4b076f4
const db = require('../database/index.js');
const utellySample = require('../sampledata/utelly.json');
const apis = require('./request');

app.use(bodyParser.json());
app.use(express.static('client'));
app.use(express.static('node_modules'));

// Session/////////////////////
app.use(session({
  secret: 'cain is sour never sweet',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true },
}));
// Session End /////////////////

<<<<<<< HEAD
app.use(passport.initialize());
app.use(passport.session());

const users = [{ id: 983, username: 'tonild', password: 'erika31' }];

passport.use(new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
}, (username, password, callback) => {
  // db.findOne({ username, password })
  //   .then((user) => {
  //     if (!user) {
  //       return callback(null, false, { message: 'Incorrect username or password' });
  //     }
  //     return callback(null, user, { message: 'logged in successfully' });
  //   })
  //   .catch((err) => {
  //     callback(err);
  //   });
  const user = users[0];
  if (username === user.username && password === user.password) {
    return callback(null, user);
  }
}));

// user id is saved to the session file store here
passport.serializeUser((user, callback) => {
  callback(null, user.id); // id_user
});

// the user id passport is saved in the session file
passport.deserializeUser((id, callback) => {
  console.log('Inside deserializeUser callback');
  console.log(`The user id passport saved in the session file store is: ${id}`);
  const user = users[0].id === id ? users[0] : false;
  callback(null, user);
});

// uses the get method to see if a user is authenticated for certain pages
// this happens after a user is logged in
app.get('/authrequired', (req, res) => {
  if (req.isAuthenticated()) {
    res.send('you hit the authentication endpoint\n');
  } else {
    res.redirect('/');
  }
});

app.get('/', (request, response) => {
  const uniqueID = uuid();
  response.send(200);
});

// on login compare user data to login attempt
=======

// Login ////////////////////////////////////////////////////////////////////////////////
>>>>>>> 2ccc14d53861cd7e1580e63a62661a66b4b076f4
app.post('/login', (req, res) => {
  // res.redirect('/search')

  console.log(req.post, 'made it to login');
  db.usernameInDb(req.body.username)
    .then((user) => {
      bcrypt.compare(req.body.password, user.hashed_password, (error, response) => {
        if (error) {
          return (error);
        }
        return req.session.regenerate(() => {
          req.session.user = req.body.username;
        });
      });
      res.send('cool');
      // validate credentials
      // if valid login, redirect to '/search'
      // else keep at login
    });
<<<<<<< HEAD
  })(req, res);

  // if valid login, redirect to '/search'
  // else keep at login
});

app.get('/login', (req, res) => {
  console.log(req.sessionID);
  res.send('logged in');
});
=======
});

app.get('/login', (req, res) => {
>>>>>>> 2ccc14d53861cd7e1580e63a62661a66b4b076f4

});
// LoginEnd //////////////////////////////////////////////////////////////////////////////

// SignUp ////////////////////////////////////////////////////////////////
app.post('/signup', (req, res) => {
<<<<<<< HEAD
  db.userServiceHelperFunc(req, (result) => {
    if (result === 'success') {
      res.status(201).send(`${req.body.username} succesfully registered!`);
      // redirect to '/search'
    } else {
      res.status(400).send(result);
    }
  });
=======
  db.userServiceHelperFunc(req)
    .then((response) => {
      console.log(response);
    });
  // redirect to '/search'
  res.send('server recieved signup');
>>>>>>> 2ccc14d53861cd7e1580e63a62661a66b4b076f4
});


// routes the user to their profile and queries database for their info
app.get('/profile', (req, res) => {
  // call query function in database
  // should return favorites
  // should return watch later
  // should return users services
});

// activates when a user clicks the services on their profile
app.patch('/profile', (req, res) => {
  // should perform an update query to database
  // should be able to add or remove services
});

// triggered when user tries to access main page (search page?)
app.get('/', (req, res) => {
  // should check for user authorization
  // if correct redirect user to '/search'
  // if not, redirect to login
  // query database for favorites
  // if no favorites exists, send axios request for top movies to display
});

// get request sent when search is performed
app.post('/search', (req, res) => {
  // should call axios requests
  // should send results to client and database
  console.log(req.body, 'server received this search request');
  apis.imdb(req, res);
  // res.status(200).send(utellySample);
});

// get request sent on logout click
app.get('/logout', (req, res) => {
  // close user session and delete cookies
  // redirect to '/login'
});


app.listen(port, () => {
  console.log(`Server is listening on port ${port}!`);
});
