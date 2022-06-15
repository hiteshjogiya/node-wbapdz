var express = require('express');
var router = express.Router();
var config = require('../../authentication/globalconfig');
var jwt = require('jsonwebtoken');

router.post('/', (req, res) => {
  let userData = {
    username: req.body.username,
    password: req.body.password,
  };

  var token = jwt.sign(userData, config.secretkey, {
    algorithm: config.algorithm,
    expiresIn: '5m',
  });
  if (userData.username === 'admin' && userData.password === 'admin') {
    res.status(200).json({
      message: 'login successful',
      jwtoken: token,
    });
  } else {
    res.status(401).json({
      message: 'invalid user',
    });
  }
});
module.exports = router;
