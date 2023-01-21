import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './routes'
const app = express();

require('dotenv/config');
app.use(bodyParser.json());

//Connect to DB
mongoose.set('strictQuery', false);

mongoose.connect(process.env.DB_CONNECTION, ()=>{
    console.log("Connected to DB");
});

app.use('/', routes);

module.exports = app;