const express = require ('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser')
const db = require('../database/index.js');

app.use(bodyParser.json());
app.use(express.static('client'));
app.use(express.static('node_modules'));



app.listen(port, () => {
  console.log(`Server is listening on port ${port}!`)
})



//on login compare user data to login attempt
app.post('/login', (req, res) => {
  // res.redirect('/search')
  let username = req.body.username;
  let password = req.body.username;
  console.log(req.post, 'made it to login');
  res.send('cool');
  //validate credentials
  //if valid login, redirect to '/search'
  //else keep at login


})

//upon signup, generates a session and cookie, sends to main page (search page?)
app.post('/signup', (req, res) => {

  console.log(req.body)
  res.send('server recieved signup');
  //create new user on table
  //if username already exists, keep at signup
  //redirect to '/search'
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