var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send({
  	name:"Taqi Mustafa",
  	age:25
  });
});

module.exports = router;