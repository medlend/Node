var mongoose = require('mongoose');

var ProduitSchema = mongoose.Schema({
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
var Produit = module.exports = mongoose.model('Produit', ProduitSchema);