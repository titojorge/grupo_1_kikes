const express = require('express');
const router = express.Router();
const productsControllers = require('../../controllers/api/productsControllers');
const multer = require('multer');

router.get('/products', productsControllers.list);
router.get('/products/:id', productsControllers.show);

module.exports = router;