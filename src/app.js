import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import routes from "./routes";
import "dotenv/config";

const app = express();

app.use(bodyParser.json());

//Connect to DB
mongoose.set("strictQuery", false);
mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true }, (error) => {
  if(error){
    console.log(error)
  }else{
    console.log("Connected to DB");
  }
});

app.use("/", routes);

module.exports = app;
