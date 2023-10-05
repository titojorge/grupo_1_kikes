const fs = require('fs');
const path = require('path');
const multer = require('multer');
const usersFilePath = path.join(__dirname, '../data/user.json');
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images/perfiles');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.originalname.split('.').pop());
    }
});
const upload = multer({ storage: storage }).single('imagen_perfil');

const mainController = {
    home: (req, res) => {
        return res.render('home', { products: products });
    },
    login: (req, res) => {
        return res.render('./users/login');
    },
    register: (req, res) => {
        upload(req, res, (err) => {
            if (err) {
                return res.send('Error al subir el archivo.');
            }
            const { nombre, apellido, email, contrasenia } = req.body;
            const imagen = req.file ? '/images/perfiles/' + req.file.filename : '';
            const newUser = {
                Identificador: users.length + 1,
                Nombre: nombre,
                Apellido: apellido,
                Email: email,
                Contrasenia: contrasenia,
                Categoria: "Customer",
                Imagen: imagen
            };
            users.push(newUser);
            fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2), 'utf-8');
            return res.redirect('/');
        });
    },
}
module.exports = mainController;
