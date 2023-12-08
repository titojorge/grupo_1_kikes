const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const uploadFile = require('../middlewares/userMulter');
const validateRegister = require('../middlewares/validateRegister');
const authMiddleware = require('../middlewares/authMiddleware');

//Crear USUARIO
router.get('/register', usersController.register);
router.post('/register', uploadFile.single('imagen_perfil'), validateRegister ,usersController.save);
//EDITAR USUARIO
router.get('/editUser/:id', authMiddleware, usersController.edit);
router.put('/editUser/:id',uploadFile.single('imagen_perfil') ,usersController.update);

router.get('/users', authMiddleware, usersController.listUsers);
router.get('/detailUser/:id', usersController.details);

module.exports = router;