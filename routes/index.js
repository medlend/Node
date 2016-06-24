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


router.get('/lend', function(req, res){


	console.log('lend request');
	
Categorie.find(function (err, docs) {
    console.log(docs);
    res.json(docs);
  });

});

router.get('/lend/:id', function(req, res){


	var id = req.params.id;
  console.log(id);
	
Categorie.findById(id, function(err, categorie) {
  if (err) throw err;

  // show the one Categorie
  console.log(categorie);
  res.json(categorie);
});

});

module.exports = router;