const express = require("express");
const path = require("path");
const app = express();
const mainRouter = require('./routes/main')

//config

app.use(express.static(path.join(__dirname, "../public")));

//config ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

//rutas
app.use('/', mainRouter)

app.listen(3000, () => {
  console.log("Success");
});