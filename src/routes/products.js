/**-------Configuracion para productos------*/
const express = require('express');
const router = express.Router();
const path = require('path');
const productsController = require('../controllers/productsController');
const authMiddleware = require('../middlewares/authMiddleware');
const upload = require('../middlewares/productMulter');

/*VALIDAR FORM CREATE PRODUCT*/
let validateCreateProduct = require("../middlewares/validateCreateProduct.js")
let validateEditProduct = require("../middlewares/validateEditProduct.js")

/*** GET ALL PRODUCTS ***/ 
router.get('/list', productsController.index);
router.get('/productCart',authMiddleware ,productsController.productCart) // Ruta que se accede con login
router.get('/detail/:id', productsController.detail); 
//router.get('/searchResult', productsController.search);
router.post('/searchResult', productsController.search);

/*New product*/
router.get('/new', authMiddleware ,productsController.new)  // Ruta que se accede con login, de aqui al final todas con login
router.post('/new', upload.single('image_product'), validateCreateProduct ,productsController.store);
/*Edit Product*/
router.get('/edit/:id', authMiddleware ,productsController.edit)  
router.put('/edit/:id', upload.single('image-product'),validateEditProduct,productsController.update);   
/*** DELETE ONE PRODUCT***/ 
router.get('/delete/:id' , authMiddleware, productsController.delete); 
router.delete('/delete/:id',productsController.destroy);
//router.get('/crud/' ,productsController.crud); 

module.exports = router;