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
        console.log(req);
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
      			dateLoanAgreement : req.body.dateLoanAgreement
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
