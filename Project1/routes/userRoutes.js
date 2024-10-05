const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/users', userController.index);
router.get('/users/create', userController.showCreateForm);
router.post('/users/create', userController.create);
router.get('/users/edit/:id', userController.showEditForm);
router.post('/users/edit/:id', userController.update);
router.post('/users/delete/:id', userController.delete);

module.exports = router;