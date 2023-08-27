const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require("cookie-parser");
const session = require('express-session');

const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/User');

// Middleware
app.use(bodyParser.json());

// TO HANDEL ALL THE INCOMING REQUEST FROM DEFERENT PORTS
app.use(cors());

//  SETTING UP SESSIONS
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: '49A2DF1CB8B452722715BB29DC918',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
    }
}))
// cookie parser middleware
app.use(cookieParser());

// AUTHENTICATION USING PASSPORT.js and PASSPORT-LOCAL-MONGOOSE

app.use(passport.initialize());
app.use(passport.session());

// SETTING-UP DATABASE
dbURL = 'mongodb://127.0.0.1:27017/social-media-app'
mongoose.connect(dbURL)
    .then(console.log('DB CONNECTED'))
    .catch((err) => { console.log(err) });


// Configure Passport to use LocalStrategy
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



app.get('/', (req, res) => {
    res.send('Connected to backend ');
})

// APIs
const postAPI = require('./apis/postAPI');
const userAPI = require('./apis/userAPI');


app.use(postAPI);
app.use(userAPI);

const port = 5000;
app.listen(port, () => {
    console.log(`listening at ${port}`);
});