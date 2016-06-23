var express = require('express');
var router = express.Router();
var Categorie = require('../models/Categorie');
// Get Homepage
router.get('/medlend', function(req, res){
	console.log('I received a GET request');
	res.json("medlend");
});

router.get('/med', function(req, res){


	console.log('med request');
	
  Categorie.creat() 

	res.json("medddd");

});





module.exports = router;