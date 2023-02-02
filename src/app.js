import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import routes from "./routes";
import "dotenv/config";
import swaggerUI from "swagger-ui-express";
import swaggerDocs from "./documentation";
import cors from "cors";
import morgan from "morgan";
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
//Connect to DB
mongoose.set("strictQuery", false);
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true },
  (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Connected to DB");
    }
  }
);
app.use("/", routes);
// api documentation
app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));
module.exports = app;
