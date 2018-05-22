var ProvidersModel = require('../models/ProvidersModel.js');

/**
 * ProvidersController.js
 *
 * @description :: Server-side logic for managing Providerss.
 */
module.exports = {

    /**
     * ProvidersController.list()
     */
    list: function (req, res) {
        ProvidersModel.find(function (err, Providerss) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Providers.',
                    error: err
                });
            }
            return res.json(Providerss);
        });
    },

    /**
     * ProvidersController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        ProvidersModel.findOne({_id: id}, function (err, Providers) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Providers.',
                    error: err
                });
            }
            if (!Providers) {
                return res.status(404).json({
                    message: 'No such Providers'
                });
            }
            return res.json(Providers);
        });
    },

    /**
     * ProvidersController.create()
     */
    create: function (req, res) {
        var Providers = new ProvidersModel({
      			name : req.body.name,
      			nameTvoritelny : req.body.nameTvoritelny,
      			bankAccount : req.body.bankAccount,
      			bank : req.body.bank,
      			inn : req.body.inn,
      			kpp : req.body.kpp,
            landPlace: {
              address: req.body.landPlace.address,
              area: req.body.landPlace.area,
              cadastralId: req.body.landPlace.cadastralId
            },
            other: req.body.other

        });

        Providers.save(function (err, Providers) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating Providers',
                    error: err
                });
            }
            return res.status(201).json(Providers);
        });
    },

    /**
     * ProvidersController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        ProvidersModel.findOne({_id: id}, function (err, Providers) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Providers',
                    error: err
                });
            }
            if (!Providers) {
                return res.status(404).json({
                    message: 'No such Providers'
                });
            }

            Providers.name = req.body.name ? req.body.name : Providers.name;
      			Providers.nameTvoritelny = req.body.nameTvoritelny ? req.body.nameTvoritelny : Providers.nameTvoritelny;
      			Providers.bankAccount = req.body.bankAccount ? req.body.bankAccount : Providers.bankAccount;
      			Providers.bank = req.body.bank ? req.body.bank : Providers.bank;
      			Providers.inn = req.body.inn ? req.body.inn : Providers.inn;
      			Providers.kpp = req.body.kpp ? req.body.kpp : Providers.kpp;
            Providers.landPlace.address = req.body.landPlace.address ? req.body.landPlace.address : Providers.landPlace.address;
            Providers.landPlace.area = req.body.landPlace.area ? req.body.landPlace.area : Providers.landPlace.area;
            Providers.landPlace.cadastralId = req.body.landPlace.cadastralId ? req.body.landPlace.area : Providers.landPlace.cadastralId;
            Providers.other = req.body.other ? req.body.other : Providers.other;

            Providers.save(function (err, Providers) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating Providers.',
                        error: err
                    });
                }

                return res.json(Providers);
            });
        });
    },

    /**
     * ProvidersController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        ProvidersModel.findByIdAndRemove(id, function (err, Providers) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the Providers.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
