var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var UsersSchema = new Schema({
	'fio' : String,
	'password' : String,
	'dataBirth' : Date,
	'email' : String,
	'position' : String,
	'phone' : String,
	'employmentDate' : Date,
	'role' : String,
	'createdAt' : Date,
	'updatedAt' : Date
});

module.exports = mongoose.model('Users', UsersSchema);
