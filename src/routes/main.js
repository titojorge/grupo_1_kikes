const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');
const productsController = require('../controllers/productsController');
const guestMiddleware = require('../middlewares/guestMiddleware');
const uploadFile = require('../middlewares/userMulter');

// Rutas que se acceden sin login
router.get('/', mainController.home)
router.get('/home', mainController.home)
router.get('/login', mainController.login)
router.post('/login', mainController.save_login)
//Crear USUARIO
router.get('/register', mainController.register);
router.post('/register', uploadFile.single('imagen'), mainController.save);
//EDITAR USUARIO
router.get('/editUser/:id',mainController.edit);
router.put('/editUser/:id',mainController.update);

router.get('/users', mainController.listUsers);
router.get('/detailUser/:id', mainController.details);

router.get('/cerrar-sesion', mainController.cerrar);

// Rutas con login
router.get('/productCart', guestMiddleware ,productsController.productCart)

module.exports = router;