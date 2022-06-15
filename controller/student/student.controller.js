const express = require('express');

const router = express.Router();
const studentdomain = require('../../domain/students.domain');
var fees = require('./child/fees.controller');
var result = require('./child/result.controller');

class studentController {
  //to get all record
  static get(req, res) {
    const student = new studentdomain();
    student.getAllStudents(req, res);
  }
  //to return particular record
  static getOnestudent(req, res) {
    const student = new studentdomain();
    student.getStudentRecord(req, res);
  }
}
router.use('/:studentId/fees', fees);
router.use('/:studentId/result', result);
router.get('/', studentController.get);
router.get('/:studentId', studentController.getOnestudent);
module.exports = router;
