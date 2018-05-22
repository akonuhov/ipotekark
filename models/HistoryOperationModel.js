var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var historyOperationSchema = new Schema({
	'name' : String,
	'date' : Date,
	'user' : String
});

module.exports = mongoose.model('HistoryOperation', HistoryOperationSchema);
