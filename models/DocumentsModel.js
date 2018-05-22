var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var DocumentsSchema = new Schema({
	'name' : String,
	'text' : String
});

module.exports = mongoose.model('Documents', DocumentsSchema);
