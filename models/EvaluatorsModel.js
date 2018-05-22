var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var EvaluatorsSchema = new Schema({
	'name' : String,
	'nameTvoritelny' : String,
	'bankAccount' : Number,
	'bank' : String,
	'inn' : Number,
	'kpp' : Number,
	'other': String
});

module.exports = mongoose.model('Evaluators', EvaluatorsSchema);
