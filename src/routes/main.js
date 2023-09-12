const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');
const productsController = require('../controllers/productsController');

router.get('/', mainController.home)

router.get('/home', mainController.home)

router.get('/login', mainController.login)
router.get('/register', mainController.register)
router.get('/detail',productsController.detail)
router.get('/productCart',productsController.productCart)

module.exports = router;