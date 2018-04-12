var express = require('express');
var router = express.Router();
var Employee = require('./model');

router.get('/employees/', function(req, res){
     Employee.getEmployees(function(err,employees){
         if(err) throw err;
         res.json(employees);
     });
 })
router.post('/employees/', function(req, res){
    var newEmployee = {
        name: req.body.name,
        cnumber : req.body.cnumber,
        edate : req.body.edate,
        cvv: req.body.cvv,
        zip:req.body.zip
    }
     Employee.addEmployee(newEmployee,function(err,employee){
         if(err) throw err;
         res.json(employee);
     });
 })
 router.put('/employees/:_id', function(req, res){
     var update = {
        name: req.body.name,
        cnumber : req.body.cnumber,
        edate : req.body.edate,
        cvv: req.body.cvv,
        zip:req.body.zip
    }
     Employee.updateEmployee(req.params._id , update, function(err,employee){
         if(err) throw err;
         res.json(employee);
     });
 })
 router.delete('/employees/:_id', function(req, res){
     
     Employee.deleteEmployee(req.params._id ,  function(err,employee){
         if(err) throw err;
         res.json(employee);
     });
 })
 router.get('/employees/:_id', function(req, res){
    
     Employee.getEmployee(req.params._id , function(err,employee){
         if(err) throw err;
         res.json(employee);
     });
 })
 


module.exports = router;