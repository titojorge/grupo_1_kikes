/**------CONFIGURACIONES------*/
const multer = require('multer'); // Multer, probando MULTER
const express = require("express");
const path = require("path");
const app = express();
const mainRouter = require('./routes/main')
const usersRouter = require('./routes/users')
const productsRouter = require('./routes/products');
const apiUsersRouter = require('./routes/api/users');
const apiProducts = require('./routes/api/products');
const methodOverride = require('method-override'); // Pasar poder usar los métodos PUT y DELETE
const session = require('express-session');
const cookierParser = require('cookie-parser');
const upload = multer ({ dest: './public/images/perfiles'})//PRUEBA MULTER
const cors = require('cors')

/**------METODOS DE APLICACION GLOBAL------*/
app.use(cors());
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.urlencoded({ extended: false })); // Formularios sean procesados
app.use(express.json());
app.use(cookierParser());
app.use(session({
  secret: 'Nuestro mensaje secreto',
  resave: true,
  saveUninitialized: true
}));
app.use(methodOverride('_method')); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE

/**------METODOS DE INSTANCIA EJS------*/
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

/**------RUTAS------*/
app.use('/', mainRouter)
app.use('/', usersRouter)
app.use('/products', productsRouter)
app.use('/api', apiUsersRouter)
app.use('/api', apiProducts)


app.listen(3000, () => {
  console.log("Success puerto 3000");
});