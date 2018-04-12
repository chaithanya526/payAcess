var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');


mongoose.connect('mongodb://localhost:27017/employees');
mongoose.connection.on('connected',()=>{
    console.log("sucessful on db connection");
});


mongoose.connection.on('error',(err)=>{
    if(err)
    {
        console.log('here is the error:'+err);
    }
   
});
var app = express();
var port = 3000 ;
app.get('/', function(req, res){
    res.send("Hello from kumar...");
});
var router = require('./routes');
//middleware 
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);
app.listen(port, function(){
    console.log("server is running on port  "+ port);
})