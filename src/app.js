const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const conn = require("./config");
const morgan = require("morgan");
const userRouter = require("../src/routes/user_route");
const companyRouter = require("../src/routes/company_route");
const productRouter = require("../src/routes/product_route");

conn.Connection();
app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(morgan("dev"));
app.use("/user", userRouter);
app.use("/company", companyRouter);
app.use("/product", productRouter);

module.exports = app;
