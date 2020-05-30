const errorHandler = (err, req, res, next) => {
  if (err.message === 'auth-error') {
    return res.status(401).json({
      msg: '인증 에러입니다. ',
    });
  }
  res.status(500).json({
    msg: err.message,
  });
};

module.exports = errorHandler;
