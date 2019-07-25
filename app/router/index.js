var express = require('express');

var router = express.Router();  //ルーティングするための宣言(?)


//ルーティングの動作
router.use('/1', require('./api1.js'));  //varでいちいちオブジェクトを生成しなくてもいい
router.use('/2', require('./api2.js'));

router.get('', function(req,res){

  res.json({

    message:"Hello,world.I have 1 and 2."
  
  });

});


//routerをモジュールとして扱う準備(?)
module.exports = router;
