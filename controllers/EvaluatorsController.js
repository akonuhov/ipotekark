var EvaluatorsModel = require('../models/EvaluatorsModel.js');

/**
 * EvaluatorsController.js
 *
 * @description :: Server-side logic for managing Evaluatorss.
 */
module.exports = {

    /**
     * EvaluatorsController.list()
     */
    list: function (req, res) {
        EvaluatorsModel.find(function (err, Evaluatorss) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Evaluators.',
                    error: err
                });
            }
            return res.json(Evaluatorss);
        });
    },

    /**
     * EvaluatorsController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        EvaluatorsModel.findOne({_id: id}, function (err, Evaluators) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Evaluators.',
                    error: err
                });
            }
            if (!Evaluators) {
                return res.status(404).json({
                    message: 'No such Evaluators'
                });
            }
            return res.json(Evaluators);
        });
    },

    /**
     * EvaluatorsController.create()
     */
    create: function (req, res) {
        var Evaluators = new EvaluatorsModel({
      			name : req.body.name,
      			nameTvoritelny : req.body.nameTvoritelny,
      			bankAccount : req.body.bankAccount,
      			bank : req.body.bank,
      			inn : req.body.inn,
      			kpp : req.body.kpp,
            other : req.body.other
        });

        Evaluators.save(function (err, Evaluators) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating Evaluators',
                    error: err
                });
            }
            return res.status(201).json(Evaluators);
        });
    },

    /**
     * EvaluatorsController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        EvaluatorsModel.findOne({_id: id}, function (err, Evaluators) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Evaluators',
                    error: err
                });
            }
            if (!Evaluators) {
                return res.status(404).json({
                    message: 'No such Evaluators'
                });
            }

            Evaluators.name = req.body.name ? req.body.name : Evaluators.name;
      			Evaluators.nameTvoritelny = req.body.nameTvoritelny ? req.body.nameTvoritelny : Evaluators.nameTvoritelny;
      			Evaluators.bankAccount = req.body.bankAccount ? req.body.bankAccount : Evaluators.bankAccount;
      			Evaluators.bank = req.body.bank ? req.body.bank : Evaluators.bank;
      			Evaluators.inn = req.body.inn ? req.body.inn : Evaluators.inn;
      			Evaluators.kpp = req.body.kpp ? req.body.kpp : Evaluators.kpp;
            Evaluators.other = req.body.other ? req.body.other : Evaluators.other;

            Evaluators.save(function (err, Evaluators) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating Evaluators.',
                        error: err
                    });
                }

                return res.json(Evaluators);
            });
        });
    },

    /**
     * EvaluatorsController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        EvaluatorsModel.findByIdAndRemove(id, function (err, Evaluators) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the Evaluators.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
