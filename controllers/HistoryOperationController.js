var HistoryOperationModel = require('../models/HistoryOperationModel.js');

/**
 * HistoryOperationController.js
 *
 * @description :: Server-side logic for managing HistoryOperations.
 */
module.exports = {

    /**
     * HistoryOperationController.list()
     */
    list: function (req, res) {
        HistoryOperationModel.find(function (err, HistoryOperations) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting HistoryOperation.',
                    error: err
                });
            }
            return res.json(HistoryOperations);
        });
    },

    /**
     * HistoryOperationController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        HistoryOperationModel.findOne({_id: id}, function (err, HistoryOperation) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting HistoryOperation.',
                    error: err
                });
            }
            if (!HistoryOperation) {
                return res.status(404).json({
                    message: 'No such HistoryOperation'
                });
            }
            return res.json(HistoryOperation);
        });
    },

    /**
     * HistoryOperationController.create()
     */
    create: function (req, res) {
        var HistoryOperation = new HistoryOperationModel({
			name : req.body.name,
			date : req.body.date,
			user : req.body.user

        });

        HistoryOperation.save(function (err, HistoryOperation) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating HistoryOperation',
                    error: err
                });
            }
            return res.status(201).json(HistoryOperation);
        });
    },

    /**
     * HistoryOperationController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        HistoryOperationModel.findOne({_id: id}, function (err, HistoryOperation) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting HistoryOperation',
                    error: err
                });
            }
            if (!HistoryOperation) {
                return res.status(404).json({
                    message: 'No such HistoryOperation'
                });
            }

            HistoryOperation.name = req.body.name ? req.body.name : HistoryOperation.name;
            HistoryOperation.date = req.body.date ? req.body.date : HistoryOperation.date;
            HistoryOperation.user = req.body.user ? req.body.user : HistoryOperation.user;

            HistoryOperation.save(function (err, HistoryOperation) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating HistoryOperation.',
                        error: err
                    });
                }

                return res.json(HistoryOperation);
            });
        });
    },

    /**
     * HistoryOperationController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        HistoryOperationModel.findByIdAndRemove(id, function (err, HistoryOperation) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the HistoryOperation.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
