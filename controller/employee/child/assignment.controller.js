var express = require('express');
const employeedomain = require('../../../domain/employees.domain');
var router = express.Router({ mergeParams: true });

class assignmentController {
  static getAssignment(req, res) {
    const assignment = new employeedomain();
    assignment.getAssignments(req, res);
  }
}
router.get('/', assignmentController.getAssignment);
module.exports = router;
