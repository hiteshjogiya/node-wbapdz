var express = require('express');
const studentdomain = require('../../../domain/students.domain');
var router = express.Router({ mergeParams: true });

class resultController {
  static getresult(req, res) {
    const result = new studentdomain();
    result.getResult(req, res);
  }
}
router.get('/', resultController.getresult);
module.exports = router;
