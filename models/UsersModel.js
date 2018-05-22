var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var UsersSchema = new Schema({
	'firstName' : String,
	'lastName' : String,
	'middleName' : String,
	'password' : String,
	'dataBirth' : Date,
	'email' : String,
	'position' : String,
	'phone' : Number,
	'employmentDate' : Date,
	'role' : String,
	'createdAt' : Date,
	'updatedAt' : Date
});

module.exports = mongoose.model('Users', UsersSchema);
