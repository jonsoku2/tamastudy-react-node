const express = require('express');
const {
  getPost,
  getPosts,
  createPost,
  updatePost,
  removePost,
} = require('../controllers/post.controller');

const isAuthenticated = require('../middlewares/isAuthenticated.middleware');

const router = express.Router();

router.get('/', getPosts);
router.get('/:postId', getPost);
router.post('/create', isAuthenticated, createPost);
router.put('/:postId/update', isAuthenticated, updatePost);
router.delete('/:postId/remove', isAuthenticated, removePost);

module.exports = router;
