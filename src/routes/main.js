const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');
const productsController = require('../controllers/productsController');
const guestMiddleware = require('../middlewares/guestMiddleware');

// Rutas que se acceden sin login
router.get('/', mainController.home)
router.get('/home', mainController.home)
router.get('/login', mainController.login)
router.post('/login', mainController.save_login)

router.get('/cerrar-sesion', mainController.cerrar);
// Rutas con login
router.get('/productCart', guestMiddleware ,productsController.productCart)

module.exports = router;