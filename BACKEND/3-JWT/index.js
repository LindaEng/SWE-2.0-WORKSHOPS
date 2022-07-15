const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require("cookie-parser"); // you need this to access req.cookies
const port = 8080;

//Make sure you require dotenv and envoke the config method
//Let's move the JWT_SECRET into an new .env file
//Finally, let's make sure we move the secrte to the .env file
const jwt = require('jsonwebtoken');

const { JWT_SECRET = '234709asefiaserh181349' } = process.env;
require('dotenv').config();



const bcrypt = require('bcrypt');
const SALT_COUNT = 5;

const {User} = require('./db/User');
const { sequelize } = require('./db/db');

sequelize.sync({ force: false });

app.use(cookieParser()); //to be able to access req.cookies
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

///////////////////////// routes /////////////////////////
app.get('/', async (req, res, next) => {
  res.send("ROUTE IS WORKING!")
})


//registering a user - attaching a token
app.post('/register', async (req, res, next) => {
  try {
    const { username, password } = req.body // this is typically a form from the client side
    const hashed = await bcrypt.hash(password, SALT_COUNT) // hashing our password to safely store in our db
    const user = await User.create({ username, password: hashed}) // creating a new user
    const token = jwt.sign({id: user.id, username: user.username}, JWT_SECRET) // generates a token
    res.send({message: "SUCCESS", token})
  } catch (error) {
    console.error(error);
    next(error)
  }
})


//login - always use post for the sake of demoing we can use get
app.get('/user', async (req, res, next) => {
  try {
    const username = "IAmNew" //for demo on browser
    const password = "test123" //for demo on browser
    //const { username, password } = req.body // from the client side trying to log in
    //look in our db to see if this user exists
    const user = await User.findOne({where: {username}}); //username:'username', password: hashed string
    const isAMatch = await bcrypt.compare(password, user.password) // returns a boolean
    if(isAMatch) {
      //we will attach a JWT token to this user
      const {id, username} = user // {id: , username: 'username'}
      const token = jwt.sign({id, username}, JWT_SECRET) // 
      //we need to store this token in a cookie, so the user can navigate to other areas of the application but will have the token persist
      //httpOnly cookie
      //.cookie(nameOfCookie, whatYouWantToStore, options)
      res.status(200).cookie('token', token, {
        expires: new Date(Date.now() + 99999),
        secure: true,
        httpOnly: true
      }).send(token)
    } else {
      res.sendStatus(401).send('USER DOES NOT EXIST')
    }
  }   
   catch (error) {
    console.error(error);
    next(error)
  }
})


//route that will only be accessbile to a user that is logged in and has a valid JWT
app.get('/subscribers', async (req, res, next) => {
  try {
   //check to see if the user is logged in?
   const token = req.cookies.token
   //decode the token to access the original payload
   const decryptUser = await jwt.verify(token, JWT_SECRET) 
   //if user is logged in, decryptUser will store the original payload
   //original payload: {id: , username: }
   if(decryptUser) {
     res.send(`WELCOME BACK: ${decryptUser.username}, this is a premium subscription!!`)
   } else {
     res.send('YOU NEED TO LOG IN')
   }
  } catch (err) {
    console.error(err)
  }
})

///////////////////////// routes /////////////////////////

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
