
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes');
 // , calc = require('./routes/calc.js');
 //var bodyparser = require('body-parser');

var app = module.exports = express.createServer();

// Configuration


//app.use(bodyparser.json());
//app.use(bodyparser.urlencoded({extended:true}));

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});


// Routes

//app.get('/', routes.index);

//app.post('/add',calc.add);


  app.post('/add', function (req, res) {   //function to print sum of two numbers
   

   var a= parseInt(req.body.a);
   var b= parseInt(req.body.b);
   var result = a + b ;
      
   console.log("value of a is "+a);
   console.log("value of b is "+b);
   console.log(result);
   return res.send("result is "+result)


   
});

  app.post('/sub', function (req, res) {   //function to print subtraction of two numbers
   

   var a= parseInt(req.body.a);
   var b= parseInt(req.body.b);
   var result = a - b ;
      
   console.log("value of a is "+a);
   console.log("value of b is "+b);
   console.log(result);
   return res.send("result is "+result)


   
});

  app.post('/mul', function (req, res) {   //function to print multiplication of two numbers
   

   var a= parseInt(req.body.a);
   var b= parseInt(req.body.b);
   var result = a * b ;
      
   console.log("value of a is "+a);
   console.log("value of b is "+b);
   console.log(result);
   return res.send("result is "+result)



   
});

  app.post('/div', function (req, res) {  //function to print division of two numbers
    

   var a= parseInt(req.body.a);
   var b= parseInt(req.body.b);
   var result = a / b ;
      
   console.log("value of a is "+a);
   console.log("value of b is "+b);
   console.log(result);
   return res.send("result is "+result)


   
});
  app.post('/mod', function (req, res) {  //function to print modulus of two numbers
   

   var a= parseInt(req.body.a);
   var b= parseInt(req.body.b);
   var result = a % b ;
      
   console.log("value of a is "+a);
   console.log("value of b is "+b);
   console.log(result);
   return res.send("result is "+result)


   
});

app.post('/percent',function(req,res)
{
  var a=parseInt(req.body.a);
  var b= parseInt(req.body.b);
  var result = (a / b)*100;

  console.log("value of a is "+a);
   console.log("value of b is "+b);
   console.log(result);
   return res.send("result is "+result)

});


app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
