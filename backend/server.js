// backend/server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const productsRoute = require("./routes/products");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/products", productsRoute);

mongoose.connect("mongodb://localhost:27017/productdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to the database");
});

app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
