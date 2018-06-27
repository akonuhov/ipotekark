var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var SocialPaymentsSchema = new Schema({
	'borrowerId': String,
	'category' : String,
	'numberCitizensRegister' : String,
	'totalAreaPlaceRegistration' : Number,
	'numberRegisteredPersons' : Number,
	'provideCitizenArea' : Number,
	'nameRegistrationCertificate' : String,
	'registrationCertificateNumber' : Number,
	'dateRegistrationCertificate' : Date,
	'numberCohabitingFamilyMembers' : Number,
	'familyCertificateReference' : String,
	'familyCertificateNumber' : Number,
	'dateCertificateFamily' : Date,
	'cohabitingFamilyMembers' : String,
	'nameCertificateFromBank' : String,
	'numberCertificateFromBank' : Number,
	'dateCertificateFromBank' : Date,
	'nameEmployer' : String,
	'certificateNumberFromWork' : Number,
	'dateCertificateFromWork' : Date,
	'positionWithIndicationEmployer' : String,
	'nameDocumentConfirmingApprovalLoan' : String,
	'approvalNumber' : Number,
	'approvalDate' : Date,
	'categoryRecipientSocialBenefits' : String,
	'totalAmountSocialPayment' : Number
});

module.exports = mongoose.model('SocialPayments', SocialPaymentsSchema);
