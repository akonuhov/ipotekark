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
            id: req.body.id,
          	status: req.body.status,
          	borrowerId: req.body.borrowerId,
          	providerId: req.body.providerId,
          	evaluatorId: req.body.evaluatorId,
          	amountCredit: req.body.amountCredit,
          	timeCredit: req.body.timeCredit,
          	costSquareMeter: req.body.costSquareMeter,
          	totalAreaAapartment: req.body.totalAreaAapartment,
          	costApartment: req.body.costApartment,
          	initialFee: req.body.initialFee,
          	percentRate: req.body.percentRate,
          	totalLoanValue: req.body.totalLoanValue,
          	estimatedCostApartment: req.body.estimatedCostApartment,
          	numberDependents: req.body.numberDependents,
          	ageOnMomentEndCredit: req.body.ageOnMomentEndCredit,
          	monthlyPayment: req.body.monthlyPayment,
          	dateLoanAgreement: req.body.dateLoanAgreement,
          	purchaseAgreementNumber: req.body.purchaseAgreementNumber,
          	numberEvaluationReport: req.body.numberEvaluationReport,
          	dateEvaluationReport: req.body.dateEvaluationReport
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

            SocialPayments.id = req.body.id;
          	SocialPayments.status = req.body.status;
          	SocialPayments.borrowerId = req.body.borrowerId;
          	SocialPayments.providerId = req.body.providerId;
          	SocialPayments.evaluatorId = req.body.evaluatorId;
          	SocialPayments.amountCredit = req.body.amountCredit;
          	SocialPayments.timeCredit = req.body.timeCredit;
          	SocialPayments.costSquareMeter = req.body.costSquareMeter;
          	SocialPayments.totalAreaAapartment = req.body.totalAreaAapartment;
          	SocialPayments.costApartment = req.body.costApartment;
          	SocialPayments.initialFee = req.body.initialFee;
          	SocialPayments.percentRate = req.body.percentRate;
          	SocialPayments.totalLoanValue = req.body.totalLoanValue;
          	SocialPayments.estimatedCostApartment = req.body.estimatedCostApartment;
          	SocialPayments.numberDependents = req.body.numberDependents;
          	SocialPayments.ageOnMomentEndCredit = req.body.ageOnMomentEndCredit;
          	SocialPayments.monthlyPayment = req.body.monthlyPayment;
          	SocialPayments.dateLoanAgreement = req.body.dateLoanAgreement;
          	SocialPayments.purchaseAgreementNumber = req.body.purchaseAgreementNumber;
          	SocialPayments.numberEvaluationReport = req.body.numberEvaluationReport;
          	SocialPayments.dateEvaluationReport = req.body.dateEvaluationReport;

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
