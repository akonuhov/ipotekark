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
	'shareInOwnership': Number,
	'numberDependents': Number,
	'ageOnMomentEndCredit': Number,
	'monthlyPayment': Number,
	'dateLoanAgreement': Date,
	'socialPayments': {
		'category': String,
		'numberCitizensRegister': Number,
		'totalAreaPlaceRegistration': Number,
		'numberRegisteredPersons': Number,
		'provideCitizenArea': Number,
		'nameRegistrationCertificate': String,
		'registrationCertificateNumber': Number,
		'dateRegistrationCertificate': Date,
		'numberCohabitingFamilyMembers': Number,
		'familyCertificateReference': String,
		'familyCertificateNumber': Number,
		'dateCertificateFamily': Date,
		'cohabitingFamilyMembers': String,
		'nameCertificateFromBank': String,
		'numberCertificateFromBank': Number,
		'dateCertificateFromBank': Date,
		'nameEmployer': String,
		'certificateNumberFromWork': Number,
		'dateCertificateFromWork': Date,
		'positionWithIndicationEmployer': String,
		'nameDocumentConfirmingApprovalLoan': String,
		'approvalNumber': Number,
		'approvalDate': Date,
		'categoryRecipientSocialBenefits': String,
		'totalAmountSocialPayment': Number
	}
});

module.exports = mongoose.model('CreditObject', CreditObjectSchema);
