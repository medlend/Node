var express = require('express');
var router = express.Router();

// Get Homepage
router.get('/medlend', function(req, res){
	console.log('I received a GET request');
	res.json("med");
});

module.exports = router;