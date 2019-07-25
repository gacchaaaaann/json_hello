//read library
var express = require('express');
var app = express();

var router = require('./router/'); //routerの指定
app.use('/', router); // /のAPIにrouterを指定

//サーバー起動
app.listen(3000);
console.log('listen on port 3000');
