var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var CreditObjectSchema = new Schema({
	'id': String,
	'status': String,
	'borrowerId': String,
	'providerId': Number,
	'evaluatorId': Number,
	'amountCredit': Number,
	'timeCredit': Number,
	'costSquareMeter': Number,
	'totaAareAapartment': Number,
	'costApartment': Number,
	'initialFee': Number,
	'percentRate': Number,
	'totalLoanValue': Number,
	'estimatedCostApartment': Number,
	'numberDependents': Number,
	'ageOnMomentEndCredit': Number,
	'monthlyPayment': Number,
	'dateLoanAgreement': Date
});

module.exports = mongoose.model('CreditObject', CreditObjectSchema);
