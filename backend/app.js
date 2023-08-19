const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


// Middleware
app.use(bodyParser.json());

// SETTING-UP DATABASE
dbURL = 'mongodb+srv://GARY:hIDHMEKVrGxJQWAD@shopping-app.wp2stkc.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(dbURL)
    .then(console.log('DB CONNECTED'))
    .catch((err) => { console.log(err)});


app.get('/', (req, res) => {
    res.send('connected');
})

// APIs
const postAPI = require('./apis/postAPI');


app.use(postAPI);

const port = 5000;
app.listen(port , ()=>{
    console.log(`listening at ${port}`);
});