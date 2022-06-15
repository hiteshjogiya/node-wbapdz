const jwt = require('jsonwebtoken');
const config = require('./globalconfig');
function verifytoken(req, res, next) {
  var token = req.headers['x-access-token'];
  jwt.verify(
    token,
    config.secretkey,
    {
      algorithm: config.algorithm,
    },
    (err, decoded) => {
      if (err) {
        const errData = {
          message: err.message,
          expireAt: err.expiredAt,
        };
        console.log(errData);
        return res.status(401).json({
          message: 'unAuthorised Access',
        });
      }
      req.decoded = decoded;
      console.log(decoded);
      next();
    }
  );
}
module.exports = verifytoken;
