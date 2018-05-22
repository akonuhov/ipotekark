var DocumentsModel = require('../models/DocumentsModel.js');

/**
 * DocumentsController.js
 *
 * @description :: Server-side logic for managing Documentss.
 */
module.exports = {

    /**
     * DocumentsController.list()
     */
    list: function (req, res) {
        DocumentsModel.find(function (err, Documentss) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Documents.',
                    error: err
                });
            }
            return res.json(Documentss);
        });
    },

    /**
     * DocumentsController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        DocumentsModel.findOne({_id: id}, function (err, Documents) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Documents.',
                    error: err
                });
            }
            if (!Documents) {
                return res.status(404).json({
                    message: 'No such Documents'
                });
            }
            return res.json(Documents);
        });
    },

    /**
     * DocumentsController.create()
     */
    create: function (req, res) {
        var Documents = new DocumentsModel({
			name : req.body.name,
			text : req.body.text

        });

        Documents.save(function (err, Documents) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating Documents',
                    error: err
                });
            }
            return res.status(201).json(Documents);
        });
    },

    /**
     * DocumentsController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        DocumentsModel.findOne({_id: id}, function (err, Documents) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Documents',
                    error: err
                });
            }
            if (!Documents) {
                return res.status(404).json({
                    message: 'No such Documents'
                });
            }

            Documents.name = req.body.name ? req.body.name : Documents.name;
			Documents.text = req.body.text ? req.body.text : Documents.text;
			
            Documents.save(function (err, Documents) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating Documents.',
                        error: err
                    });
                }

                return res.json(Documents);
            });
        });
    },

    /**
     * DocumentsController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        DocumentsModel.findByIdAndRemove(id, function (err, Documents) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the Documents.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
