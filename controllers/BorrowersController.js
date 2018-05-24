var BorrowersModel = require('../models/BorrowersModel.js');

/**
 * BorrowersController.js
 *
 * @description :: Server-side logic for managing Borrowerss.
 */
module.exports = {

    /**
     * BorrowersController.list()
     */
    list: function (req, res) {
        BorrowersModel.find(function (err, Borrowerss) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Borrowers.',
                    error: err
                });
            }
            return res.json(Borrowerss);
        });
    },

    /**
     * BorrowersController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        BorrowersModel.findOne({_id: id}, function (err, Borrowers) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Borrowers.',
                    error: err
                });
            }
            if (!Borrowers) {
                return res.status(404).json({
                    message: 'No such Borrowers'
                });
            }
            return res.json(Borrowers);
        });
    },

    /**
     * BorrowersController.create()
     */
    create: function (req, res) {
        var Borrowers = new BorrowersModel({
          passportData: {
            fioImenitelny : req.body.passportData.fioImenitelny,
            fioRoditelny : req.body.passportData.fioRoditelny,
            fioDatelny : req.body.passportData.fioDatelny,
            fioTvoritelny : req.body.passportData.fioTvoritelny,
      			dateBirth : req.body.passportData.dateBirth,
      			gender : req.body.passportData.gender,
      			passportSeries : req.body.passportData.passportSeries,
      			passportId : req.body.passportData.passportId,
      			issuedBy : req.body.passportData.issuedBy,
      			unitCode : req.body.passportData.unitCode,
      			placeBirth : req.body.passportData.placeBirth
          },
          share: {
            shareInOwnership: req.body.share.placeBirth
          },
          contactData: {
            phoneHome : req.body.contactData.phoneHome,
      			phoneService : req.body.contactData.phoneService,
      			phoneMobile : req.body.contactData.phoneMobile,
      			email : req.body.contactData.email
          },
          bankData: {
            accountNumber : req.body.accountNumber,
      			requisites : req.body.requisites
          },
          incomeData: {
            basic : req.body.incomeData.basic,
      			basicDeduction : req.body.incomeData.basicDeduction,
      			partTime : req.body.incomeData.partTime,
      			partTimeDeduction : req.body.incomeData.partTimeDeduction,
      			pension : req.body.incomeData.pension,
      			pensionDeduction : req.body.incomeData.pensionDeduction
          },
          aggregateExpense : req.body.aggregateExpense,
    			placeRegistration: {
            subject : req.body.placeRegistration.subject,
      			district : req.body.placeRegistration.district,
      			typeSettlement : req.body.placeRegistration.typeSettlement,
      			locality : req.body.placeRegistration.locality,
      			typeRoad : req.body.placeRegistration.typeRoad,
      			nameRoad : req.body.placeRegistration.nameRoad,
      			houseNumber : req.body.placeRegistration.houseNumber,
      			housing : req.body.placeRegistration.housing,
      			apartmentNumber : req.body.placeRegistration.apartmentNumber
          },
          placeResidence: {
            subject : req.body.placeResidence.subject,
      			district : req.body.placeResidence.district,
      			typeSettlement : req.body.placeResidence.typeSettlement,
      			locality : req.body.placeResidence.locality,
      			typeRoad : req.body.placeResidence.typeRoad,
      			nameRoad : req.body.placeResidence.nameRoad,
      			houseNumber : req.body.placeResidence.houseNumber,
      			housing : req.body.placeResidence.housing,
      			apartmentNumber : req.body.placeResidence.apartmentNumber
          }
        });

        Borrowers.save(function (err, Borrowers) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating Borrowers',
                    error: err
                });
            }
            return res.status(201).json(Borrowers);
        });
    },

    /**
     * BorrowersController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        BorrowersModel.findOne({_id: id}, function (err, Borrowers) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Borrowers',
                    error: err
                });
            }
            if (!Borrowers) {
                return res.status(404).json({
                    message: 'No such Borrowers'
                });
            }
            // passportData
            Borrowers.passportData.fioImenitelny = req.body.passportData.fioImenitelny ? req.body.passportData.fioImenitelny : Borrowers.passportData.fioImenitelny;
      			Borrowers.passportData.fioRoditelny = req.body.passportData.fioRoditelny ? req.body.passportData.fioRoditelny : Borrowers.passportData.fioRoditelny;
      			Borrowers.passportData.fioDatelny = req.body.passportData.fioDatelny ? req.body.passportData.fioDatelny : Borrowers.passportData.fioDatelny;
            Borrowers.passportData.fioTvoritelny = req.body.passportData.fioTvoritelny ? req.body.passportData.fioTvoritelny : Borrowers.passportData.fioTvoritelny;
      			Borrowers.passportData.dateBirth = req.body.passportData.dateBirth ? req.body.passportData.dateBirth : Borrowers.passportData.dateBirth;
      			Borrowers.passportData.gender = req.body.passportData.gender ? req.body.passportData.gender : Borrowers.passportData.gender;
      			Borrowers.passportData.passportSeries = req.body.passportData.passportSeries ? req.body.passportData.passportSeries : Borrowers.passportData.passportSeries;
      			Borrowers.passportData.passportId = req.body.passportData.passportId ? req.body.passportData.passportId : Borrowers.passportData.passportId;
      			Borrowers.passportData.issuedBy = req.body.passportData.issuedBy ? req.body.passportData.issuedBy : Borrowers.passportData.issuedBy;
      			Borrowers.passportData.unitCode = req.body.passportData.unitCode ? req.body.passportData.unitCode : Borrowers.passportData.unitCode;
      			Borrowers.passportData.placeBirth = req.body.passportData.placeBirth ? req.body.passportData.placeBirth : Borrowers.passportData.placeBirth;
            // shareData
            Borrowers.share.shareInOwnership = req.body.share.shareInOwnership ? req.body.share.shareInOwnership : Borrowers.share.shareInOwnership;
            // contactData
      			Borrowers.contactData.phoneHome = req.body.contactData.phoneHome ? req.body.contactData.phoneHome : Borrowers.contactData.phoneHome;
      			Borrowers.contactData.phoneService = req.body.contactData.phoneService ? req.body.contactData.phoneService : Borrowers.contactData.phoneService;
      			Borrowers.contactData.phoneMobile = req.body.contactData.phoneMobile ? req.body.contactData.phoneMobile : Borrowers.contactData.phoneMobile;
      			Borrowers.contactData.email = req.body.contactData.email ? req.body.contactData.email : Borrowers.contactData.email;
            // bankData
            Borrowers.bankData.accountNumber = req.body.bankData.accountNumber ? req.body.bankData.accountNumber : Borrowers.bankData.accountNumber;
      			Borrowers.bankData.requisites = req.body.bankData.requisites ? req.body.bankData.requisites : Borrowers.bankData.requisites;
            // incomeData
      			Borrowers.incomeData.basic = req.body.incomeData.basic ? req.body.incomeData.basic : Borrowers.incomeData.basic;
      			Borrowers.incomeData.basicDeduction = req.body.incomeData.basicDeduction ? req.body.incomeData.basicDeduction : Borrowers.incomeData.basicDeduction;
      			Borrowers.incomeData.partTime = req.body.incomeData.partTime ? req.body.incomeData.partTime : Borrowers.incomeData.partTime;
      			Borrowers.incomeData.partTimeDeduction = req.body.incomeData.partTimeDeduction ? req.body.incomeData.partTimeDeduction : Borrowers.incomeData.partTimeDeduction;
      			Borrowers.incomeData.pension = req.body.incomeData.pension ? req.body.incomeData.pension : Borrowers.incomeData.pension;
      			Borrowers.incomeData.pensionDeduction = req.body.incomeData.pensionDeduction ? req.body.incomeData.pensionDeduction : Borrowers.incomeData.pensionDeduction;
      			// aggregateExpenseData
      			Borrowers.aggregateExpense = req.body.aggregateExpense ? req.body.aggregateExpense : Borrowers.aggregateExpense;
            // placeRegistrationData
      			Borrowers.placeRegistration.subject = req.body.placeRegistration.subject ? req.body.placeRegistration.subject : Borrowers.placeRegistration.subject;
      			Borrowers.placeRegistration.district = req.body.placeRegistration.district ? req.body.placeRegistration.district : Borrowers.placeRegistration.district;
      			Borrowers.placeRegistration.typeSettlement = req.body.placeRegistration.typeSettlement ? req.body.placeRegistration.typeSettlement : Borrowers.placeRegistration.typeSettlement;
      			Borrowers.placeRegistration.locality = req.body.placeRegistration.locality ? req.body.placeRegistration.locality : Borrowers.placeRegistration.locality;
      			Borrowers.placeRegistration.typeRoad = req.body.placeRegistration.typeRoad ? req.body.placeRegistration.typeRoad : Borrowers.placeRegistration.typeRoad;
      			Borrowers.placeRegistration.nameRoad = req.body.placeRegistration.nameRoad ? req.body.placeRegistration.nameRoad : Borrowers.placeRegistration.nameRoad;
      			Borrowers.placeRegistration.houseNumber = req.body.placeRegistration.houseNumber ? req.body.placeRegistration.houseNumber : Borrowers.placeRegistration.houseNumber;
      			Borrowers.placeRegistration.housing = req.body.placeRegistration.housing ? req.body.placeRegistration.housing : Borrowers.placeRegistration.housing;
      			Borrowers.placeRegistration.apartmentNumber = req.body.placeRegistration.apartmentNumber ? req.body.placeRegistration.apartmentNumber : Borrowers.placeRegistration.apartmentNumber;
            // placeResidenceData
      			Borrowers.placeResidence.subject = req.body.placeResidence.subject ? req.body.placeResidence.subject : Borrowers.placeResidence.subject;
      			Borrowers.placeResidence.district = req.body.placeResidence.district ? req.body.placeResidence.district : Borrowers.placeResidence.district;
      			Borrowers.placeResidence.typeSettlement = req.body.placeResidence.typeSettlement ? req.body.placeResidence.typeSettlement : Borrowers.placeResidence.typeSettlement;
      			Borrowers.placeResidence.locality = req.body.placeResidence.locality ? req.body.placeResidence.locality : Borrowers.placeResidence.locality;
      			Borrowers.placeResidence.typeRoad = req.body.placeResidence.typeRoad ? req.body.placeResidence.typeRoad : Borrowers.placeResidence.typeRoad;
      			Borrowers.placeResidence.nameRoad = req.body.placeResidence.nameRoad ? req.body.placeResidence.nameRoad : Borrowers.placeResidence.nameRoad;
      			Borrowers.placeResidence.houseNumber = req.body.placeResidence.houseNumber ? req.body.placeResidence.houseNumber : Borrowers.placeResidence.houseNumber;
      			Borrowers.placeResidence.housing = req.body.placeResidence.housing ? req.body.placeResidence.housing : Borrowers.placeResidence.housing;
      			Borrowers.placeResidence.apartmentNumber = req.body.placeResidence.apartmentNumber ? req.body.placeResidence.apartmentNumber : Borrowers.placeResidence.apartmentNumber;

            Borrowers.save(function (err, Borrowers) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating Borrowers.',
                        error: err
                    });
                }

                return res.json(Borrowers);
            });
        });
    },

    /**
     * BorrowersController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        BorrowersModel.findByIdAndRemove(id, function (err, Borrowers) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the Borrowers.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
