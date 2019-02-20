const express = require ('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser')
const db = require('../database/index.js');
const bcrypt = require('bcrypt');

app.use(bodyParser.json());
app.use(express.static('client'));
app.use(express.static('node_modules'));



app.listen(port, () => {
  console.log(`Server is listening on port ${port}!`)
})



//on login compare user data to login attempt
app.post('/login', (req, res) => {
  // res.redirect('/search')
  
  console.log(req.post, 'made it to login');
  
  res.send('cool');
  //validate credentials
  //if valid login, redirect to '/search'
  //else keep at login


})

//upon signup, generates a session and cookie, sends to main page (search page?)
app.post('/signup', (req, res) => {
  console.log(req.body)
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
app.get('/videos', (req, res) => {
  //should call axios requests
  //should send results to client and database
})

//get request sent on logout click
app.get('/logout', (req, res) => {
  //close user session and delete cookies
  //redirect to '/login'
})