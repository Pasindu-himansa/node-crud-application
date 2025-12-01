const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const Product = require("./models/product.model.js");
const productRoute = require("./route/product.route.js");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API");
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to database");
    app.listen(3000, () => {
      console.log("server is running on port 3000");
    });
  })
  .catch((err) => {
    console.log("Connection failed");
    console.log(err);
  });
