const express = require('express');
const router = express.Router();
const categoriesContrroller = require('../../controllers/api/categoryProducts');
const multer = require('multer');

router.get('/categories', categoriesContrroller.list);
router.get('/categories/:id', categoriesContrroller.show);

module.exports = router;