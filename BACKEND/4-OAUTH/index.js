// invoke config to get the environment variables
require('dotenv').config('.env');
const cors = require('cors');
const express = require('express');
const { auth } = require('express-openid-connect');
const morgan = require('morgan');

// create express app
const app = express();
// pull PORT from environment variables
// const { PORT = 3000 } = process.env;


// middleware
// enable CORS
app.use(cors());
// log requests to console
app.use(morgan('dev'));
// parse request body
app.use(express.json());
app.use(express.urlencoded({extended:true}));

/* ************ START OIDC CODE ************ */

//Set up your Auth0 account -> create new application -> get client ID + config object [x]

//importing env vars from .env file
const {
  AUTH0_SECRET, 
  AUTH0_BASEURL,
  AUTH0_CLIENTID,
  AUTH0_ISSUER_BASE_URL,
  PORT
} = process.env

//check your enviornmental variables with console logs
console.log('AUTH0_SECRET', AUTH0_SECRET)
console.log('AUTH0_BASEURL', AUTH0_BASEURL)
console.log('AUTH0_CLIENTID', AUTH0_CLIENTID)
console.log('AUTH0_ISSUER_BASE_URL', AUTH0_ISSUER_BASE_URL)


// define the config object 
const config = {
  authRequired: false,
  auth0Logout: true,
  secret: AUTH0_SECRET,
  baseURL: AUTH0_BASEURL,
  clientID: AUTH0_CLIENTID,
  issuerBaseURL: AUTH0_ISSUER_BASE_URL
};


// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// create a GET / route handler that sends back Logged in or Logged out
// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});



//try
app.get('/subscriber', (req, res) => {
  const isLoggedIn = req.oidc.isAuthenticated()
  try {
    if(isLoggedIn) {
      res.send(`HELLOOOO LOGGED IN SUBSCRIBER`)
    }else {
      res.send(`PAY ME TO SEE`)
    }
  } catch (error) {
    console.error(error)
  }
});

//create another get route - if a user is logged in, render something, if they are not verified/logged in render something else.

/* ************ END OIDC CODE ************ */

// error handling middleware
app.use((error, req, res, next) => {
  console.error('SERVER ERROR: ', error);
  if(res.statusCode < 400) res.status(500);
  res.send({error: error.message, name: error.name, message: error.message});
});

app.listen(PORT, () => {
  console.log(`Server is up at http://localhost:${PORT}`);
});

