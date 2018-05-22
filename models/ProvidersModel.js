var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var ProvidersSchema = new Schema({
	'name' : String,
	'nameTvoritelny' : String,
	'bankAccount' : Number,
	'bank' : String,
	'inn' : Number,
	'kpp' : Number,
	'landPlace': {
		'address': String,
		'area': Number,
		'cadastralId': String,
	},
	'other': String
});

module.exports = mongoose.model('Providers', ProvidersSchema);
