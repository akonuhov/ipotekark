var CreditObjectModel = require('../models/CreditObjectModel.js');

/**
 * CreditObjectController.js
 *
 * @description :: Server-side logic for managing CreditObjects.
 */
module.exports = {

    /**
     * CreditObjectController.list()
     */
    list: function (req, res) {
        CreditObjectModel.find(function (err, CreditObjects) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting CreditObject.',
                    error: err
                });
            }
            return res.json(CreditObjects);
        });
    },

    /**
     * CreditObjectController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        CreditObjectModel.findOne({_id: id}, function (err, CreditObject) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting CreditObject.',
                    error: err
                });
            }
            if (!CreditObject) {
                return res.status(404).json({
                    message: 'No such CreditObject'
                });
            }
            return res.json(CreditObject);
        });
    },

    /**
     * CreditObjectController.create()
     */
    create: function (req, res) {
        var CreditObject = new CreditObjectModel({
            id: req.body.id,
            status: req.body.id,
            borrowerId: req.body.borrowerId,
            providerId: req.body.providerId,
            evaluatorId: req.body.evaluatorId,
      			amountCredit : req.body.amountCredit,
      			timeCredit : req.body.timeCredit,
      			costSquareMeter : req.body.costSquareMeter,
      			totaAareAapartment : req.body.totaAareAapartment,
      			costApartment : req.body.costApartment,
      			initialFee : req.body.initialFee,
      			percentRate : req.body.percentRate,
      			totalLoanValue : req.body.totalLoanValue,
      			estimatedCostApartment : req.body.estimatedCostApartment,
      			numberDependents : req.body.numberDependents,
      			ageOnMomentEndCredit : req.body.ageOnMomentEndCredit,
      			monthlyPayment : req.body.monthlyPayment,
      			dateLoanAgreement : req.body.dateLoanAgreement,
            socialPayments: {
              category: req.body.socialPayments.category,
            	numberCitizensRegister: req.body.socialPayments.numberCitizensRegister,
            	totalAreaPlaceRegistration: req.body.socialPayments.totalAreaPlaceRegistration,
            	numberRegisteredPersons: req.body.socialPayments.numberRegisteredPersons,
            	provideCitizenArea: req.body.socialPayments.provideCitizenArea,
            	nameRegistrationCertificate: req.body.socialPayments.nameRegistrationCertificate,
            	registrationCertificateNumber: req.body.socialPayments.registrationCertificateNumber,
            	dateRegistrationCertificate: req.body.socialPayments.dateRegistrationCertificate,
            	numberCohabitingFamilyMembers: req.body.socialPayments.numberCohabitingFamilyMembers,
            	familyCertificateReference: req.body.socialPayments.familyCertificateReference,
            	familyCertificateNumber: req.body.socialPayments.familyCertificateNumber,
            	dateCertificateFamily: req.body.socialPayments.dateCertificateFamily,
            	cohabitingFamilyMembers: req.body.socialPayments.cohabitingFamilyMembers,
            	nameCertificateFromBank: req.body.socialPayments.nameCertificateFromBank,
            	numberCertificateFromBank: req.body.socialPayments.numberCertificateFromBank,
            	dateCertificateFromBank: req.body.socialPayments.dateCertificateFromBank,
            	nameEmployer: req.body.socialPayments.nameEmployer,
            	certificateNumberFromWork: req.body.socialPayments.certificateNumberFromWork,
            	dateCertificateFromWork: req.body.socialPayments.dateCertificateFromWork,
            	positionWithIndicationEmployer: req.body.socialPayments.positionWithIndicationEmployer,
            	nameDocumentConfirmingApprovalLoan: req.body.socialPayments.nameDocumentConfirmingApprovalLoan,
            	approvalNumber: req.body.socialPayments.approvalNumber,
            	approvalDate: req.body.socialPayments.approvalDate,
            	categoryRecipientSocialBenefits: req.body.socialPayments.categoryRecipientSocialBenefits,
            	totalAmountSocialPayment: req.body.socialPayments.totalAmountSocialPayment
            }
        });

        CreditObject.save(function (err, CreditObject) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating CreditObject',
                    error: err
                });
            }
            return res.status(201).json(CreditObject);
        });
    },

    /**
     * CreditObjectController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        CreditObjectModel.findOne({_id: id}, function (err, CreditObject) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting CreditObject',
                    error: err
                });
            }
            if (!CreditObject) {
                return res.status(404).json({
                    message: 'No such CreditObject'
                });
            }

            CreditObject.id = req.body.id ? req.body.id : CreditObject.id;
            CreditObject.status = req.body.status ? req.body.status : CreditObject.status;
            CreditObject.borrowerId = req.body.borrowerId ? req.body.borrowerId : CreditObject.borrowerId;
            CreditObject.providerId = req.body.providerId ? req.body.providerId : CreditObject.providerId;
            CreditObject.evaluatorId = req.body.evaluatorId ? req.body.evaluatorId : CreditObject.evaluatorId;
            CreditObject.amountCredit = req.body.amountCredit ? req.body.amountCredit : CreditObject.amountCredit;
      			CreditObject.timeCredit = req.body.timeCredit ? req.body.timeCredit : CreditObject.timeCredit;
      			CreditObject.costSquareMeter = req.body.costSquareMeter ? req.body.costSquareMeter : CreditObject.costSquareMeter;
      			CreditObject.totaAareAapartment = req.body.totaAareAapartment ? req.body.totaAareAapartment : CreditObject.totaAareAapartment;
      			CreditObject.costApartment = req.body.costApartment ? req.body.costApartment : CreditObject.costApartment;
      			CreditObject.initialFee = req.body.initialFee ? req.body.initialFee : CreditObject.initialFee;
      			CreditObject.percentRate = req.body.percentRate ? req.body.percentRate : CreditObject.percentRate;
      			CreditObject.totalLoanValue = req.body.totalLoanValue ? req.body.totalLoanValue : CreditObject.totalLoanValue;
      			CreditObject.estimatedCostApartment = req.body.estimatedCostApartment ? req.body.estimatedCostApartment : CreditObject.estimatedCostApartment;
      			CreditObject.numberDependents = req.body.numberDependents ? req.body.numberDependents : CreditObject.numberDependents;
      			CreditObject.ageOnMomentEndCredit = req.body.ageOnMomentEndCredit ? req.body.ageOnMomentEndCredit : CreditObject.ageOnMomentEndCredit;
      			CreditObject.monthlyPayment = req.body.monthlyPayment ? req.body.monthlyPayment : CreditObject.monthlyPayment;
      			CreditObject.dateLoanAgreement = req.body.dateLoanAgreement ? req.body.dateLoanAgreement : CreditObject.dateLoanAgreement;
            // socialPaymentsDate
            CreditObject.socialPayments.category = req.body.socialPayments.category ? req.body.socialPayments.category : CreditObject.socialPayments.category;
          	CreditObject.socialPayments.numberCitizensRegister = req.body.socialPayments.numberCitizensRegister ? req.body.socialPayments.numberCitizensRegister : CreditObject.socialPayments.numberCitizensRegister;
          	CreditObject.socialPayments.totalAreaPlaceRegistration = req.body.socialPayments.totalAreaPlaceRegistration ? req.body.socialPayments.totalAreaPlaceRegistration : CreditObject.socialPayments.totalAreaPlaceRegistration;
          	CreditObject.socialPayments.numberRegisteredPersons = req.body.socialPayments.numberRegisteredPersons ? req.body.socialPayments.numberRegisteredPersons : CreditObject.socialPayments.numberRegisteredPersons;
          	CreditObject.socialPayments.provideCitizenArea = req.body.socialPayments.provideCitizenArea ? req.body.socialPayments.provideCitizenArea : CreditObject.socialPayments.provideCitizenArea;
          	CreditObject.socialPayments.nameRegistrationCertificate = req.body.socialPayments.nameRegistrationCertificate ? req.body.socialPayments.nameRegistrationCertificate : CreditObject.socialPayments.nameRegistrationCertificate;
          	CreditObject.socialPayments.registrationCertificateNumber = req.body.socialPayments.registrationCertificateNumber ? req.body.socialPayments.registrationCertificateNumber : CreditObject.socialPayments.registrationCertificateNumber;
          	CreditObject.socialPayments.dateRegistrationCertificate = req.body.socialPayments.dateRegistrationCertificate ? req.body.socialPayments.dateRegistrationCertificate : CreditObject.socialPayments.dateRegistrationCertificate;
          	CreditObject.socialPayments.numberCohabitingFamilyMembers = req.body.socialPayments.numberCohabitingFamilyMembers ? req.body.socialPayments.numberCohabitingFamilyMembers : CreditObject.socialPayments.numberCohabitingFamilyMembers;
          	CreditObject.socialPayments.familyCertificateReference = req.body.socialPayments.familyCertificateReference ? req.body.socialPayments.familyCertificateReference : CreditObject.socialPayments.familyCertificateReference;
          	CreditObject.socialPayments.familyCertificateNumber = req.body.socialPayments.familyCertificateNumber ? req.body.socialPayments.familyCertificateNumber : CreditObject.socialPayments.familyCertificateNumber;
          	CreditObject.socialPayments.dateCertificateFamily = req.body.socialPayments.dateCertificateFamily ? req.body.socialPayments.dateCertificateFamily : CreditObject.socialPayments.dateCertificateFamily;
          	CreditObject.socialPayments.cohabitingFamilyMembers = req.body.socialPayments.cohabitingFamilyMembers ? req.body.socialPayments.cohabitingFamilyMembers : CreditObject.socialPayments.cohabitingFamilyMembers;
          	CreditObject.socialPayments.nameCertificateFromBank = req.body.socialPayments.nameCertificateFromBank ? req.body.socialPayments.nameCertificateFromBank : CreditObject.socialPayments.nameCertificateFromBank;
          	CreditObject.socialPayments.numberCertificateFromBank = req.body.socialPayments.numberCertificateFromBank ? req.body.socialPayments.numberCertificateFromBank : CreditObject.socialPayments.numberCertificateFromBank;
          	CreditObject.socialPayments.dateCertificateFromBank = req.body.socialPayments.dateCertificateFromBank ? req.body.socialPayments.dateCertificateFromBank : CreditObject.socialPayments.dateCertificateFromBank;
          	CreditObject.socialPayments.nameEmployer = req.body.socialPayments.nameEmployer ? req.body.socialPayments.nameEmployer : CreditObject.socialPayments.nameEmployer;
          	CreditObject.socialPayments.certificateNumberFromWork = req.body.socialPayments.certificateNumberFromWork ? req.body.socialPayments.certificateNumberFromWork : CreditObject.socialPayments.certificateNumberFromWork;
          	CreditObject.socialPayments.dateCertificateFromWork = req.body.socialPayments.dateCertificateFromWork ? req.body.socialPayments.dateCertificateFromWork : CreditObject.socialPayments.dateCertificateFromWork;
          	CreditObject.socialPayments.positionWithIndicationEmployer = req.body.socialPayments.positionWithIndicationEmployer ? req.body.socialPayments.positionWithIndicationEmployer : CreditObject.socialPayments.positionWithIndicationEmployer;
          	CreditObject.socialPayments.nameDocumentConfirmingApprovalLoan = req.body.socialPayments.nameDocumentConfirmingApprovalLoan ? req.body.socialPayments.nameDocumentConfirmingApprovalLoan : CreditObject.socialPayments.nameDocumentConfirmingApprovalLoan;
          	CreditObject.socialPayments.approvalNumber = req.body.socialPayments.approvalNumber ? req.body.socialPayments.approvalNumber : CreditObject.socialPayments.approvalNumber;
          	CreditObject.socialPayments.approvalDate = req.body.socialPayments.approvalDate ? req.body.socialPayments.approvalDate : CreditObject.socialPayments.approvalDate;
          	CreditObject.socialPayments.categoryRecipientSocialBenefits = req.body.socialPayments.categoryRecipientSocialBenefits ? req.body.socialPayments.categoryRecipientSocialBenefits : CreditObject.socialPayments.categoryRecipientSocialBenefits;
          	CreditObject.socialPayments.totalAmountSocialPayment = req.body.socialPayments.totalAmountSocialPayment ? req.body.socialPayments.totalAmountSocialPayment : CreditObject.socialPayments.totalAmountSocialPayment;

            CreditObject.save(function (err, CreditObject) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating CreditObject.',
                        error: err
                    });
                }

                return res.json(CreditObject);
            });
        });
    },

    /**
     * CreditObjectController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        CreditObjectModel.findByIdAndRemove(id, function (err, CreditObject) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the CreditObject.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
