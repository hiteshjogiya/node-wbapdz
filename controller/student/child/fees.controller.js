var express = require('express');
const studentdomain = require('../../../domain/controller.domain/students.domain');
var router = express.Router({ mergeParams: true });

class feesController {
  static getFees(req, res) {
    console.log('fees');
    const fees = new studentdomain();
    fees.getFees(req, res);
  }
}
router.get('/', feesController.getFees);
module.exports = router;
