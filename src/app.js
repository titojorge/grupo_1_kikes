const multer = require('multer'); // Multer, probando MULTER
const express = require("express");
const path = require("path");
const app = express();
const mainRouter = require('./routes/main')
const productsRouter = require('./routes/products');
const methodOverride = require('method-override'); // Pasar poder usar los métodos PUT y DELETE
const session = require('express-session');
const cookierParser = require('cookie-parser') 

//config
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.urlencoded({ extended: false })); // Formularios sean procesados
app.use(express.json());
app.use(methodOverride('_method')); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE
app.use(session( {secret: "Nuestro mensaje secreto"}));
app.use(cookierParser());

//config ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));


//rutas
app.use('/', mainRouter)
app.use('/products', productsRouter)
app.listen(3000, () => {
  console.log("Success");
});