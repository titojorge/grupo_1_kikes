const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');
const productsController = require('../controllers/productsController');
const authMiddleware = require('../middlewares/authMiddleware');
const validateLogin = require('../middlewares/validateLogin');

// Rutas que se acceden sin login
router.get('/',  mainController.home)
router.get('/home',  mainController.home)
router.get('/login',  mainController.login)
router.post('/login', validateLogin, mainController.save_login)
router.get('/cerrar-sesion', authMiddleware, mainController.cerrar);
// Rutas con login
router.get('/productCart', authMiddleware ,productsController.productCart)

module.exports = router;