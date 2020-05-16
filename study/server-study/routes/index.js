const express = require('express');
const postRouter = require('./post.route');
const userRouter = require('./user.route');

const router = express.Router();

router.use('/post', postRouter);
router.use('/user', userRouter);

module.exports = router;
