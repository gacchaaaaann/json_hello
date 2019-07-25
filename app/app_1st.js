//read library
var express = require('express');
var app = express();

//Before:app.get('/',  function(req, res){  res.send('Hello World!'); });
app.get('/', function(req,res){
  res.json({
    message : "Hello,world"
  });
}  )

//Before:app.listen(3000, function(){});
app.listen(3000);
console.log('listen on port 3000');
