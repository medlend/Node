var mongoose = require('mongoose');

var CategorieSchema = mongoose.Schema({
	username: {
		type: String,
		index:true
	},
	password: {
		type: String
	},
	email: {
		type: String
	},
	name: {
		type: String
	}
});
var Categorie = module.exports = mongoose.model('Categorie', CategorieSchema);


    // Creating one user.


module.exports.creat= function(){


    var categorie1 = new Categorie ({
      username: 'Asldfv',
      password: 'ffs',
      email: 'dfsf',
      name: 'sdfsfs'
    });

    // Saving it to the database.


    categorie1.save(function (err) {if (err) console.log ('Error on save!')});
}