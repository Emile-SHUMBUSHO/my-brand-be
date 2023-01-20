const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
require('dotenv/config');
app.use(bodyParser.json());

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, ()=>{
    console.log("Connected to DB");
});
//ROUTES
//Import Routes

const postsRoute = require('./routes/blog');
app.use('/blog', postsRoute);

//How to we start listening to the server

app.listen(8080);