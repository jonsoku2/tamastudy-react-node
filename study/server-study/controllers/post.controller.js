const Post = require('../models/post.model');
const asyncHandler = require('../middlewares/asyncHandler.middleware');

exports.getPosts = asyncHandler(async (req, res, next) => {
  const posts = await Post.find();
  res.status(200).json(posts);
});

exports.getPost = asyncHandler(async (req, res, next) => {
  const postId = req.params.postId;
  const post = await Post.findById({ _id: postId });
  if (!post) return next(`${postId}에 대한 포스트가 존재하지 않습니다. `);
  res.status(200).json(post);
});

exports.createPost = asyncHandler(async (req, res, next) => {
  const newPost = await Post.create({ ...req.body, user: req.user._id });
  res.status(201).json(newPost);
});

exports.updatePost = asyncHandler(async (req, res, next) => {
  const postId = req.params.postId;
  let post = await Post.findById(postId);

  if (post.user.toString() !== req.user._id.toString()) {
    throw new Error('권한이 없습니다. ');
  }

  post = await Post.findByIdAndUpdate(
    { _id: postId },
    { ...req.body },
    { new: true, runValidators: false },
  );
  if (!post) {
    throw new Error('포스트가 존재하지 않습니다.');
  }
  res.status(201).json(post);
});

exports.removePost = asyncHandler(async (req, res, next) => {
  const postId = req.params.postId;
  const post = await Post.findById(postId);

  if (post.user.toString() !== req.user._id.toString()) {
    throw new Error('권한이 없습니다. ');
  }

  await post.remove();

  if (!post) {
    throw new Error('포스트가 존재하지 않습니다.');
  }
  res.status(201).json({ msg: '포스트가 삭제되었습니다', ...post._doc });
});
