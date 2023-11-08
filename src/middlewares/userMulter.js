const multer = require('multer');

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images/perfiles')
    },
    filename: function (req, file, cb) {
        let fileName = Date.now() + '-' + file.originalname.replace(/ /gi, '-').toLocaleLowerCase();
            cb(null, fileName)
    }
})
const upload = multer({storage: storage})
module.exports = upload