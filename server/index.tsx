import express from "express";
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import path from 'path';
require('dotenv').config();
import router from './router';
import Stripe from 'stripe';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
if (!(process.env.NODE_ENV === "production")) {
  app.use(cors());
}
app.use("/", router);
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "..", "client", "build")));

  app.get("*", (req:any, res:any) => {
    res.sendFile(
      path.resolve(__dirname, "..", "client", "build", "index.html")
    );
  });
}
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI ? process.env.MONGO_URI : "")
  .then(() => {
    console.log("Connected to database...");
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));
  })
  .catch((err:any) => console.log(err));
