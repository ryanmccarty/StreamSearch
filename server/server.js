const express = require('express');

const app = express();
const session = require('express-session');

const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
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


// Login ////////////////////////////////////////////////////////////////////////////////
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
});

app.get('/login', (req, res) => {

});
// LoginEnd //////////////////////////////////////////////////////////////////////////////

// SignUp ////////////////////////////////////////////////////////////////
app.post('/signup', (req, res) => {
  db.userServiceHelperFunc(req)
    .then((response) => {
      console.log(response);
    });
  // redirect to '/search'
  res.send('server recieved signup');
});
// SignUp End /////////////////////////////////////////////////////////////


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
