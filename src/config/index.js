const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const mongoURL = process.env.mongoUrl;

const Connection = async () => {
    try {
    mongoose.set("strictQuery", true);
      mongoose.connect(mongoURL);
      console.log("Connection Database Successful !!");
    } catch (error) {
      console.log("Connection Database Error " + error);
    }
  };

  module.exports = {
    Connection,
    // secret: process.env.SECRET_KEY,
    // credentials,
    // user: process.env.email, 
    // pass: process.env.password
  };