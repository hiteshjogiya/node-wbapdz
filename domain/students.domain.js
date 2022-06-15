const fs = require('fs');
var students = require('../json/students.json');

class studentdomain {
  //to get all students
  getAllStudents(req, res) {
    res.send(students);
  }
  getStudentRecord(req, res) {
    let id = req.params.studentId;
    const result = students.find((item) => {
      return item.ID === parseInt(id);
    });
    if (!result) {
      return res.status(404).send('student not found');
    }
    res.send(result);
    res.end();
  }
  //to return particular fees record
  getFees(req, res) {
    let id = req.params.studentId;
    const result = students.find((item) => {
      return item.ID === parseInt(id);
    });
    if (!result) {
      return res.status(404).send('student not found');
    }
    res.send(result.Fees);
    res.end();
  }
  //to return particular result record
  getResult(req, res) {
    let id = req.params.studentId;
    const result = students.find((item) => {
      return item.ID === parseInt(id);
    });
    if (!result) {
      return res.status(404).send('student not found');
    }
    res.send(result.Result);
    res.end();
  }
  //to update result of student
}
module.exports = studentdomain;
