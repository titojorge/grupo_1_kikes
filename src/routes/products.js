/**-------Configuracion para productos------*/
const express = require('express');
const router = express.Router();
const path = require('path');
const productsController = require('../controllers/productsController');
const guestMiddleware = require('../middlewares/guestMiddleware')
const upload = require('../middlewares/productMulter');

/*VALIDAR FORM CREATE PRODUCT*/
let validateCreateProduct = require("../middlewares/validateCreateProduct.js")
let validateEditProduct = require("../middlewares/validateEditProduct.js")

/*** GET ALL PRODUCTS ***/ 
router.get('/list', productsController.index);
router.get('/productCart',guestMiddleware ,productsController.productCart) // Ruta que se accede con login
router.get('/detail/:id', productsController.detail); 
/*New product*/
router.get('/new', guestMiddleware ,productsController.new)  // Ruta que se accede con login, de aqui al final todas con login
router.post('/new', guestMiddleware, upload.single('image_product'), validateCreateProduct ,productsController.store);
/*Edit Product*/
router.get('/edit/:id', guestMiddleware ,productsController.edit)  
router.put('/edit/:id', guestMiddleware ,upload.single('image-product'),validateEditProduct,productsController.update);   
/*** DELETE ONE PRODUCT***/ 
router.get('/delete/:id' ,productsController.delete); 
router.delete('/delete/:id',productsController.destroy); 

router.get('/crud/' ,productsController.crud); 


module.exports = router;