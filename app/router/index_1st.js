var express = require('express');

var router = express.Router();  //ルーティングするための宣言(?)


//ルーティングの動作
router.get('/', function(req,res){

  res.json({

    message:"Hello,world"

  });

});


//routerをモジュールとして扱う準備(?)
module.exports = router;
