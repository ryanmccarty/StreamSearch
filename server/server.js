const express = require('express');

const app = express();
const session = require('express-session');

const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const db = require('../database/index.js');
const helpers = require('./helpers');


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


// Login ////////////////////////////////////////////////////////////////////////////////
app.post('/login', (req, res) => {


  console.log(req.post, 'made it to login');
  db.usernameInDb(req.body.username)
    .then((user) => {
      bcrypt.compare(req.body.password, user.hashed_password, (error, response) => {
        if (error) {
          console.error(error);
          res.status(500).send('no such user or incorrect password!');
        } else {
          console.log(response);
          req.session.regenerate(() => {
            req.session.user = req.body.username;
          });
          res.status(201).send('logged in!');
        }
      });

      // validate credentials
      // if valid login, redirect to '/search'
      // else keep at login
    });
});
// LoginEnd //////////////////////////////////////////////////////////////////////////////

// Get User Profile information /////////////////////////////////////////////////////////////////
app.get('/profile/:username', (req, res) => {
  const { username } = req.query;
  db.getUserInfo(username, (result) => {
    if (result === 'success') {
      res.status(200).send(`here is ${username}'s profile info`);
    } else {
      res.status(400).send(result);
    }
  });
});
// Get User Profile information End//////////////////////////////////////////////////////////////

// SignUp ////////////////////////////////////////////////////////////////
app.post('/signup', (req, res) => {
  db.userServiceHelperFunc(req, (result) => {
    if (result === 'success') {
      res.status(201).send(`${req.body.username} succesfully registered!`);
      // redirect to '/search'
    } else {
      res.status(400).send(result);
    }
  });
});
// SignUp End /////////////////////////////////////////////////////////////


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
app.get('/search', (req, res) => {
  console.log(req);
  helpers.getMovies(req.query);
  // res.send(movies);
  // should send results to client and database
  console.log(req.body, 'server received this search request');
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
