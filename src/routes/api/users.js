const express = require('express');
const router = express.Router();
const userControllers = require('../../controllers/api/userControllers');
const multer = require('multer');

router.get('/users', userControllers.list);
router.get('/users/:id', userControllers.show);

module.exports = router;