var express = require('express');
var router = express.Router();


//GET http://localhost:3000/2
router.get('', function(req,res){

  res.json({

    message:"This is api2."
  
  });

});


//routerをモジュールとして扱うおまじない
module.exports = router;
