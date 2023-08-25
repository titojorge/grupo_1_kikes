const express = require("express");
const path = require("path");
const app = express();
const mainRouter = require('./routes/main')

//config

app.use(express.static(path.join(__dirname, "./public")));

//config ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

//rutas
<<<<<<< HEAD

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "views/home.html"));
});
app.get("/productCart.html", function (req, res) {
  res.sendFile(path.join(__dirname, "views/productCart.html"));
});
app.get("/register.html", function (req, res) {
  res.sendFile(path.join(__dirname, "views/register.html"));
});
app.get("/login.html", function (req, res) {
  res.sendFile(path.join(__dirname, "views/login.html"));
});
app.get("/home.html", function (req, res) {
  res.sendFile(path.join(__dirname, "views/home.html"));
});
=======
app.use('/', mainRouter)
>>>>>>> d379fe6ddfea2bd0803e6d5d174ae7b951e5611b

app.listen(3000, () => {
  console.log("Success");
});