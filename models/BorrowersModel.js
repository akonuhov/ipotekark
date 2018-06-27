var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var BorrowersSchema = new Schema({
	'passportData': {
		'fioImenitelny': String,
		'fioRoditelny': String,
		'fioDatelny': String,
		'fioTvoritelny': String,
		'dateBirth' : Date,
		'gender' : String,
		'passportSeries' : Number,
		'passportId' : Number,
		'issuedBy' : String,
		'unitCode' : String,
		'placeBirth' : String
	},
	'share': {
		'shareInOwnership': Number
	},
	'contactData': {
		'phoneHome' : String,
		'phoneService' : String,
		'phoneMobile' : String,
		'email' : String
	},
	'bankData': {
		'accountNumber' : Number,
		'requisites' : String,
	},
	'incomeData': {
		'basic' : Number,
		'basicDeduction' : Number,
		'partTime' : Number,
		'partTimeDeduction' : Number,
		'pension' : Number,
		'pensionDeduction' : Number
	},
	'aggregateExpense' : Number,
	'placeRegistration': {
		'subject' : String,
		'district' : String,
		'typeSettlement' : String,
		'locality' : String,
		'typeRoad' : String,
		'nameRoad' : String,
		'houseNumber' : Number,
		'housing' : String,
		'apartmentNumber' : Number
	},
	'placeResidence': {
		'subject' : String,
		'district' : String,
		'typeSettlement' : String,
		'locality' : String,
		'typeRoad' : String,
		'nameRoad' : String,
		'houseNumber' : Number,
		'housing' : String,
		'apartmentNumber' : Number
	}
});

module.exports = mongoose.model('Borrowers', BorrowersSchema);
