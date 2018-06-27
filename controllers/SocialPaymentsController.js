var SocialPaymentsModel = require('../models/SocialPaymentsModel.js');

/**
 * SocialPaymentsController.js
 *
 * @description :: Server-side logic for managing SocialPaymentss.
 */
module.exports = {

    /**
     * SocialPaymentsController.list()
     */
    list: function (req, res) {
        SocialPaymentsModel.find(function (err, SocialPaymentss) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting SocialPayments.',
                    error: err
                });
            }
            return res.json(SocialPaymentss);
        });
    },

    /**
     * SocialPaymentsController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        SocialPaymentsModel.findOne({_id: id}, function (err, SocialPayments) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting SocialPayments.',
                    error: err
                });
            }
            if (!SocialPayments) {
                return res.status(404).json({
                    message: 'No such SocialPayments'
                });
            }
            return res.json(SocialPayments);
        });
    },

    /**
     * SocialPaymentsController.create()
     */
    create: function (req, res) {
        var SocialPayments = new SocialPaymentsModel({
            borrowerId : req.body.borrowerId,
      			category : req.body.category,
      			numberCitizensRegister : req.body.numberCitizensRegister,
      			totalAreaPlaceRegistration : req.body.totalAreaPlaceRegistration,
      			numberRegisteredPersons : req.body.numberRegisteredPersons,
      			provideCitizenArea : req.body.provideCitizenArea,
      			nameRegistrationCertificate : req.body.nameRegistrationCertificate,
      			registrationCertificateNumber : req.body.registrationCertificateNumber,
      			dateRegistrationCertificate : req.body.dateRegistrationCertificate,
      			numberCohabitingFamilyMembers : req.body.numberCohabitingFamilyMembers,
      			familyCertificateReference : req.body.familyCertificateReference,
      			familyCertificateNumber : req.body.familyCertificateNumber,
      			dateCertificateFamily : req.body.dateCertificateFamily,
      			cohabitingFamilyMembers : req.body.cohabitingFamilyMembers,
      			nameCertificateFromBank : req.body.nameCertificateFromBank,
      			numberCertificateFromBank : req.body.numberCertificateFromBank,
      			dateCertificateFromBank : req.body.dateCertificateFromBank,
      			nameEmployer : req.body.nameEmployer,
      			certificateNumberFromWork : req.body.certificateNumberFromWork,
      			dateCertificateFromWork : req.body.dateCertificateFromWork,
      			positionWithIndicationEmployer : req.body.positionWithIndicationEmployer,
      			nameDocumentConfirmingApprovalLoan : req.body.nameDocumentConfirmingApprovalLoan,
      			approvalNumber : req.body.approvalNumber,
      			approvalDate : req.body.approvalDate,
      			categoryRecipientSocialBenefits : req.body.categoryRecipientSocialBenefits,
      			totalAmountSocialPayment : req.body.totalAmountSocialPayment
        });

        SocialPayments.save(function (err, SocialPayments) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating SocialPayments',
                    error: err
                });
            }
            return res.status(201).json(SocialPayments);
        });
    },

    /**
     * SocialPaymentsController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        SocialPaymentsModel.findOne({_id: id}, function (err, SocialPayments) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting SocialPayments',
                    error: err
                });
            }
            if (!SocialPayments) {
                return res.status(404).json({
                    message: 'No such SocialPayments'
                });
            }

            SocialPayments.borrowerId = req.body.borrowerId ? req.body.borrowerId : SocialPayments.borrowerId;
            SocialPayments.category = req.body.category ? req.body.category : SocialPayments.category;
      			SocialPayments.numberCitizensRegister = req.body.numberCitizensRegister ? req.body.numberCitizensRegister : SocialPayments.numberCitizensRegister;
      			SocialPayments.totalAreaPlaceRegistration = req.body.totalAreaPlaceRegistration ? req.body.totalAreaPlaceRegistration : SocialPayments.totalAreaPlaceRegistration;
      			SocialPayments.numberRegisteredPersons = req.body.numberRegisteredPersons ? req.body.numberRegisteredPersons : SocialPayments.numberRegisteredPersons;
      			SocialPayments.provideCitizenArea = req.body.provideCitizenArea ? req.body.provideCitizenArea : SocialPayments.provideCitizenArea;
      			SocialPayments.nameRegistrationCertificate = req.body.nameRegistrationCertificate ? req.body.nameRegistrationCertificate : SocialPayments.nameRegistrationCertificate;
      			SocialPayments.registrationCertificateNumber = req.body.registrationCertificateNumber ? req.body.registrationCertificateNumber : SocialPayments.registrationCertificateNumber;
      			SocialPayments.dateRegistrationCertificate = req.body.dateRegistrationCertificate ? req.body.dateRegistrationCertificate : SocialPayments.dateRegistrationCertificate;
      			SocialPayments.numberCohabitingFamilyMembers = req.body.numberCohabitingFamilyMembers ? req.body.numberCohabitingFamilyMembers : SocialPayments.numberCohabitingFamilyMembers;
      			SocialPayments.familyCertificateReference = req.body.familyCertificateReference ? req.body.familyCertificateReference : SocialPayments.familyCertificateReference;
      			SocialPayments.familyCertificateNumber = req.body.familyCertificateNumber ? req.body.familyCertificateNumber : SocialPayments.familyCertificateNumber;
      			SocialPayments.dateCertificateFamily = req.body.dateCertificateFamily ? req.body.dateCertificateFamily : SocialPayments.dateCertificateFamily;
      			SocialPayments.cohabitingFamilyMembers = req.body.cohabitingFamilyMembers ? req.body.cohabitingFamilyMembers : SocialPayments.cohabitingFamilyMembers;
      			SocialPayments.nameCertificateFromBank = req.body.nameCertificateFromBank ? req.body.nameCertificateFromBank : SocialPayments.nameCertificateFromBank;
      			SocialPayments.numberCertificateFromBank = req.body.numberCertificateFromBank ? req.body.numberCertificateFromBank : SocialPayments.numberCertificateFromBank;
      			SocialPayments.dateCertificateFromBank = req.body.dateCertificateFromBank ? req.body.dateCertificateFromBank : SocialPayments.dateCertificateFromBank;
      			SocialPayments.nameEmployer = req.body.nameEmployer ? req.body.nameEmployer : SocialPayments.nameEmployer;
      			SocialPayments.certificateNumberFromWork = req.body.certificateNumberFromWork ? req.body.certificateNumberFromWork : SocialPayments.certificateNumberFromWork;
      			SocialPayments.dateCertificateFromWork = req.body.dateCertificateFromWork ? req.body.dateCertificateFromWork : SocialPayments.dateCertificateFromWork;
      			SocialPayments.positionWithIndicationEmployer = req.body.positionWithIndicationEmployer ? req.body.positionWithIndicationEmployer : SocialPayments.positionWithIndicationEmployer;
      			SocialPayments.nameDocumentConfirmingApprovalLoan = req.body.nameDocumentConfirmingApprovalLoan ? req.body.nameDocumentConfirmingApprovalLoan : SocialPayments.nameDocumentConfirmingApprovalLoan;
      			SocialPayments.approvalNumber = req.body.approvalNumber ? req.body.approvalNumber : SocialPayments.approvalNumber;
      			SocialPayments.approvalDate = req.body.approvalDate ? req.body.approvalDate : SocialPayments.approvalDate;
      			SocialPayments.categoryRecipientSocialBenefits = req.body.categoryRecipientSocialBenefits ? req.body.categoryRecipientSocialBenefits : SocialPayments.categoryRecipientSocialBenefits;
      			SocialPayments.totalAmountSocialPayment = req.body.totalAmountSocialPayment ? req.body.totalAmountSocialPayment : SocialPayments.totalAmountSocialPayment;

            SocialPayments.save(function (err, SocialPayments) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating SocialPayments.',
                        error: err
                    });
                }

                return res.json(SocialPayments);
            });
        });
    },

    /**
     * SocialPaymentsController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        SocialPaymentsModel.findByIdAndRemove(id, function (err, SocialPayments) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the SocialPayments.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
