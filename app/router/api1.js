var express = require('express');
var router = express.Router();

//GET http://localhost:3000/1
router.get('', function(req,res){

  res.json({

    message:"This is api1."
  
  });

});


//routerをモジュールとして扱うおまじない
module.exports = router;
