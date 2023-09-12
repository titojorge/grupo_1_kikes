// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
// ************ Controller Require ************
const productsController = require('../controllers/productsController');

/*configurar MULTER*/
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null,path.join(__dirname,'../../public/images/productsImg'))
    },
    filename: function(req,file,cb){
        const fileNameNew =  path.basename(file.originalname);
        cb(null,fileNameNew)
    }
})
const upload = multer({ storage : storage})

/*** GET ALL PRODUCTS ***/ 
router.get('/list', productsController.index); 
router.get('/productCart', productsController.productCart)
router.get('/detail/:id', productsController.detail); 
/*New product*/
router.get('/new', productsController.new)
router.post('/new', upload.single('image-product'),productsController.store); 
/*Edit Product*/
router.get('/edit/:id', productsController.edit)
router.put('/edit/:id', upload.single('image-product'),productsController.update); 
/*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:id', productsController.destroy); 


module.exports = router;