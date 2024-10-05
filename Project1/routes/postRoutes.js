const express = require('express');
const postController = require('../controllers/postController');

const router = express.Router();

router.get('/posts', postController.index);
router.get('/posts/create', postController.showCreateForm);
router.post('/posts/create', postController.create);
router.get('/posts/edit/:id', postController.showEditForm);
router.post('/posts/edit/:id', postController.update);
router.post('/posts/delete/:id', postController.delete);

module.exports = router;