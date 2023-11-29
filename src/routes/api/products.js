const express = require('express');
const router = express.Router();
const productsControllers = require('../../controllers/api/productsControllers');
const multer = require('multer');

router.get('/', productsControllers.list);
router.get('/:id', productsControllers.show);

module.exports = router;