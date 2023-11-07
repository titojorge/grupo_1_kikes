// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
// ************ Controller Require ************
const productsController = require('../controllers/productsController');
const guestMiddleware = require('../middlewares/guestMiddleware')

/*configurar MULTER*/
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null,path.join(__dirname,'../../public/images/productsImg'))
    },
    filename: function(req,file,cb){
        const fileNameNew = Date.now() + '-'+ path.basename(file.originalname);
        cb(null,fileNameNew)
    }
})
const upload = multer({ storage : storage})

/*** GET ALL PRODUCTS ***/ 
router.get('/list', productsController.index);
router.get('/productCart',guestMiddleware ,productsController.productCart) // Ruta que se accede con login
router.get('/detail/:id', productsController.detail); 
/*New product*/
router.get('/new', guestMiddleware ,productsController.new)  // Ruta que se accede con login, de aqui al final todas con login
router.post('/new', guestMiddleware ,upload.single('image-product'),productsController.store);
/*Edit Product*/
router.get('/edit/:id', guestMiddleware ,productsController.edit)  
router.put('/edit/:id', guestMiddleware ,upload.single('image-product'),productsController.update);   
/*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:id', guestMiddleware ,productsController.destroy); 

router.get('/crud/' ,productsController.crud); 


module.exports = router;