// import express function from express plugin
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { json, urlencoded } from "body-parser";

import { handleError } from './startup/errorHandler';
import { databaseConnect } from "./startup/database";
// make instance app from express function
const app = express();

// create variable type number to store the port in it
const port: number = 3000;

// create cors  options
const optionCors: cors.CorsOptions = {
  allowedHeaders: [
    "Origin",
    "Accept",
    "Content-Type",
    "X-Access-Token",
    "X-Request-With",
  ],
  credentials: true,
  methods: "GET,POST,PUT,DELETE,PATCH,OPTIONS,HEAD",
  origin: "http://localhost:3000",
  preflightContinue: false,
};

// use the the body parser function 
app.use(json());
app.use(urlencoded({ extended: true }));

// middlewares
// use the cors and pass the options header
app.use(cors(optionCors));
// use the helmet
app.use(helmet());
// connect to db
databaseConnect.connect();

// app use handel error function
app.use(handleError);

// app listen to the port and run application
app.listen(port, () => {
  console.log(`app run in port ${port}`);
});
