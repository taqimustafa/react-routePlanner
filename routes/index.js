var express = require('express');
var bodyParser = require('body-parser');
var User = require('../models/user');
var router = express.Router();


router.post('/signup', function(req, res, next) {
	var newUser = User({
	  name: 'Taqi',
	  email: 'taqi@hotmail.com',
	  password: '1234',
	  newsletter: true
	});
  newUser.save(function(err) {
	  if (err) throw err;
	  res.send({status:true});
	});
});
router.post('/signin', function(req, res, next) {
  User.find({ email: 'taqi@hotmail.com' }, function(err, user) {
  	if (err) throw err;
    res.send(user);
    // req.session.name = user.name;
    // req.session.email = user.email;
  });
});
router.get('*', function(req, res, next) {
  res.render('index', {
  	title: 'Route Planner',
  	//session:req.session
  });
});

module.exports = router;