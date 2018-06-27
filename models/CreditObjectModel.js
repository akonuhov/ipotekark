var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var CreditObjectSchema = new Schema({
	'id': String,
	'status': String,
	'borrowerId': String,
	'providerId': String,
	'evaluatorId': String,
	'amountCredit': Number,
	'timeCredit': Number,
	'costSquareMeter': Number,
	'totalAreaAapartment': Number,
	'costApartment': Number,
	'initialFee': Number,
	'percentRate': Number,
	'totalLoanValue': Number,
	'estimatedCostApartment': Number,
	'numberDependents': Number,
	'ageOnMomentEndCredit': Number,
	'monthlyPayment': Number,
	'dateLoanAgreement': Date,
	'purchaseAgreementNumber': String,
	'numberEvaluationReport': String,
	'dateEvaluationReport': Date
});

module.exports = mongoose.model('CreditObject', CreditObjectSchema);
