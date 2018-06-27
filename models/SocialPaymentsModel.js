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
	'registrationCertificateNumber' : String,
	'dateRegistrationCertificate' : Date,
	'numberCohabitingFamilyMembers' : Number,
	'familyCertificateReference' : String,
	'familyCertificateNumber' : String,
	'dateCertificateFamily' : Date,
	'cohabitingFamilyMembers' : String,
	'nameCertificateFromBank' : String,
	'numberCertificateFromBank' : String,
	'dateCertificateFromBank' : Date,
	'nameEmployer' : String,
	'certificateNumberFromWork' : String,
	'dateCertificateFromWork' : Date,
	'positionWithIndicationEmployer' : String,
	'nameDocumentConfirmingApprovalLoan' : String,
	'approvalNumber' : String,
	'approvalDate' : Date,
	'categoryRecipientSocialBenefits' : String,
	'totalAmountSocialPayment' : Number
});

module.exports = mongoose.model('SocialPayments', SocialPaymentsSchema);
