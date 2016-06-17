
var calc_func = {};

calc_func.add = function(req,res){
	app.post('/add', function (req, res) {
   var a = parseInt(req.body.a);
   var b = parseInt(req.body.b);
   var result = a+b;
   console.log(result);
   return res.send("result is "+result)
});


};

module.exports = calc_func;