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