const express = require('express');

const router = express.Router();
const employeedomain = require('../../domain/employees.domain');
var assignment = require('./child/assignment.controller');

class employeeController {
  //to get all record
  static get(req, res) {
    const emp = new employeedomain();
    emp.getAllemp(req, res);
  }
  //to return particular record
  static getOneEmp(req, res) {
    const emp = new employeedomain();
    emp.getempRecord(req, res);
  }
}
router.use('/:empId/assignment', assignment);
router.get('/', employeeController.get);
router.get('/:empId', employeeController.getOneEmp);
module.exports = router;
