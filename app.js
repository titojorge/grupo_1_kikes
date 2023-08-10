const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

//rutas

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "views/home.html"));
});
app.get("/productCart", function (req, res) {
  res.sendFile(path.join(__dirname, "views/productCart.html"));
});
app.get("/register", function (req, res) {
  res.sendFile(path.join(__dirname, "views/register.html"));
});

app.listen(3000, () => {
  console.log("Success");
});