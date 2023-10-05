const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');
const productsController = require('../controllers/productsController');
const multer = require('multer');

// Configuración de Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images/perfiles');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.originalname.split('.').pop());
  }
});
const upload = multer({ storage: storage });

router.get('/', mainController.home)
router.get('/home', mainController.home)
router.get('/login', mainController.login)
router.post('/login', mainController.save_login)
router.get('/register', mainController.register);
router.post('/register', mainController.upload);
router.get('/detail',productsController.detail)
router.get('/productCart',productsController.productCart)

module.exports = router;