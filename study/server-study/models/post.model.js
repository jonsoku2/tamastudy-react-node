const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, '타이틀을 입력해주세요. '],
      maxlength: [20, '20자 이내로 입력해주세요. '],
      trim: true,
    },
    description: {
      type: String,
      required: [true, '본문을 입력해주세요. '],
      maxlength: [1000, '1000자 이내로 입력해주세요. '],
    },
    view: {
      type: Number,
      default: 0,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  },
);

postSchema.pre('save', async function (next) {
  try {
    const User = require('./user.model');
    const user = await User.findById({ _id: this.user });
    user.posts = [...user.posts, this._id];
    await user.save();

    next();
  } catch (error) {
    throw new Error(error);
  }
});

postSchema.pre('remove', async function (next) {
  try {
    const User = require('./user.model');
    const user = await User.findById({ _id: this.user });
    user.posts = user.posts.filter((postId) => postId.toString() !== this._id.toString());
    await user.save();

    next();
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = mongoose.model('Post', postSchema);
