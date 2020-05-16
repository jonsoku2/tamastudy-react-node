const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
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
  imgUrl: {
    type: String,
    required: [true, '이미지주소를 입력해주세요.'],
    maxlength: [1000, '정상적인 url을 입력해주세요. '],
    trim: true,
    validate: {
      validator: function (v) {
        const regex = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
        return v == null || v.trim().length < 1000 || regex.test(v);
      },
      message: 'validate 에러입니다. ',
    },
  },
  view: {
    type: Number,
    default: 0,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
  },
  postComments: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'PostComment',
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Post', postSchema);
