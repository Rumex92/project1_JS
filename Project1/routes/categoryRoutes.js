const express = require('express');
const categoryController = require('../controllers/categoryController');

const router = express.Router();


router.get('/categories', categoryController.index);
router.get('/categories/create', categoryController.showCreateForm);
router.post('/categories/create', categoryController.create);
router.post('/categories/delete/:id', categoryController.delete);

module.exports = router;
