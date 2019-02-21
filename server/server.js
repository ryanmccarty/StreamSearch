const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const uuid = require('uuid/v4');
const bcrypt = require('bcrypt');
const db = require('../database/index.js');
const utellySample = require('../sampledata/utelly.json');
const local = require('./passport');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;


// add and configure middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('client'));
app.use(express.static('node_modules'));


// creates the sessionID
app.use(session({
  genid: (request) => {
    console.log('inside session');
    console.log(request.sessionID);
    return uuid();
  },
  store: new FileStore(),
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());

const users = [{ id: 983, username: 'tonild', password: 'erika31' }];

passport.use(new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
}, (username, password, callback) => {
  console.log('inside local strategy')
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
  console.log(user);
  if (username === user.username && password === user.password) {
    console.log('user strategy returned true');
    return callback(null, user);
  }
}));

// user id is saved to the session file store here
passport.serializeUser((user, callback) => {
  console.log('inside serizlize user');
  callback(null, user.id); // id_user
});

app.get('/', (request, response) => {
  const uniqueID = uuid();
  console.log(request.post, 'made it to login');

  // res.send(`Received the unique id: ${uniqueID}`);
  response.send(200);
});

//on login compare user data to login attempt
app.post('/login', (req, res) => {
  console.log('inside POST login function');
  passport.authenticate('local', (err, user, info) => {
    console.log('inside passport auth func');
    console.log(`req.session.passport: ${JSON.stringify(req.session.passport)}`);
    console.log(`req.user: ${JSON.stringify(req.user)}`);
    req.login(user, (error) => {
      console.log('inside passport login func');
      console.log(`req.session.passport: ${JSON.stringify(req.session.passport)}`);
      console.log(`req.user: ${JSON.stringify(req.user)}`);
      res.send('you were logged in');
    });
  })(req, res);

  //res.send('cool');
  //validate credentials
  //if valid login, redirect to '/search'
  //else keep at login

})

app.get('/login', (req, res) => {
  console.log(req.sessionID);
  res.send('logged in');
})

//upon signup, generates a session and cookie, sends to main page (search page?)
app.post('/signup', (req, res) => {
  console.log(req.body);
  //Services//////////////////////////////////////////////
  let services = req.body.services;
  const crunchyroll = services.crunchyroll;
  const googleplay = services.googleplay;
  const hulu = services.hulu;
  const iTunes = services.iTunes;
  const netflix = services.netflix;
  const primevideo = services.primevideo;

  db.Service.create({
    service_crunchyroll: crunchyroll,
    service_googleplay: googleplay,
    service_hulu: hulu,
    service_iTunes: iTunes,
    service_netflix: netflix,
    service_primevideo: primevideo
  });
  //////////////////////////////////////////////////////////
  //Users///////////////////////////////////////////////////
  let username = req.body.username;
  let country = req.body.country;
  let fullname = req.body.fullname;
  const salt = bcrypt.genSaltSync(8);
  const hashPassword = bcrypt.hashSync(req.body.password, salt);
  
  db.User.create({ 
    user_name: username,
    user_fullname: fullname, 
    hashed_password: hashPassword, 
    user_country: country})
  //////////////////////////////////////////////////////////
  
  //redirect to '/search'
  res.send('server recieved signup');
  
})

//routes the user to their profile and queries database for their info
app.get('/profile', (req, res) => {
  //call query function in database
  //should return favorites
  //should return watch later
  //should return users services
})

//activates when a user clicks the services on their profile
app.patch('/profile', (req, res) => {
  //should perform an update query to database
  //should be able to add or remove services
})

//triggered when user tries to access main page (search page?)
app.get('/', (req, res) => {
  //should check for user authorization
  //if correct redirect user to '/search'
  //if not, redirect to login
  //query database for favorites
  //if no favorites exists, send axios request for top movies to display
})

//get request sent when search is performed
app.post('/search', (req, res) => {
  //should call axios requests
  //should send results to client and database
  console.log(req.body, 'server received this search request')
  res.status(200).send(utellySample);
})

//get request sent on logout click
app.get('/logout', (req, res) => {
  //close user session and delete cookies
  //redirect to '/login'
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}!`);
})

