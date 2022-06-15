const fs = require("fs")
var employee = require("../json/employees.json")

class employeedomain{
    //to get all students
    getAllemp(req,res){
        res.send(employee)
    }
    getempRecord(req,res){
        let id = req.params.empId
        const result = employee.find((item)=>{
            return item.EmpId===parseInt(id)
        })
        if(!result){
            return res.status(404).send("employee not found")
        }
        res.send(result)
        res.end()
    }
    //to return particular fees record
    getAssignments(req,res){
        let id = req.params.empId
        
        const result = employee.find((item)=>{
            return item.EmpId===parseInt(id)
        })
        if(!result){
            return res.status(404).send("employee not found")
        }
        res.send(result.Assignments)
        res.end()
    }
  

}
module.exports=employeedomain