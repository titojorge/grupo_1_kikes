const multer = require('multer');
const path = require("path");
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
module.exports = upload