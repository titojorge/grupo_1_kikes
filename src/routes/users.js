const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const guestMiddleware = require('../middlewares/guestMiddleware');
const uploadFile = require('../middlewares/userMulter');
const validateRegister = require('../middlewares/validateRegister');

//Crear USUARIO
router.get('/register', usersController.register);
router.post('/register', uploadFile.single('imagen_perfil'), usersController.save);
//EDITAR USUARIO
router.get('/editUser/:id',usersController.edit);
router.put('/editUser/:id',uploadFile.single('imagen_perfil') , validateRegister ,usersController.update);

router.get('/users', usersController.listUsers);
router.get('/detailUser/:id', usersController.details);

module.exports = router;