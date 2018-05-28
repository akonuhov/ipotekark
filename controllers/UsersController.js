var bcrypt = require('bcrypt');
var jsonwebtoken = require('jsonwebtoken');
var UsersModel = require('../models/UsersModel.js');

/**
 * UsersController.js
 *
 * @description :: Server-side logic for managing Users.
 */
module.exports = {

    /**
     * UsersController.auth()
     */
    auth: function (req, res) {
        UsersModel.findOne({
            email: req.body.email
        }, function handleQuery(err, Users) {
            if (err) {
                res.status(500).json({
                    success: false,
                    message: 'Внутренняя ошибка сервера'
                });
                throw err;
            }
            if (!Users) {
                res.status(401).json({
                    success: false,
                    message: 'Ошибка аутентификации. Пользователь не найден.'
                });
                return;
            }
            bcrypt.compare(req.body.password, Users.password, function (err, result) {
                if (err) {
                    res.status(500).json({
                        success: false,
                        message: 'Внутренняя ошибка сервера'
                    });
                    throw err;
                }
                if (!result) {
                    res.status(401).json({
                        success: false,
                        message: 'Ошибка аутентификации. Неправильный пароль.'
                    });
                    return;
                }
                res.json({
                    success: true,
                    userId: Users.id
                });

            });
        });
    },

    /**
     * UsersController.list()
     */
    list: function (req, res) {
        UsersModel.find(function (err, Users) {
            if (err) {
                return res.status(500).json({
                    message: 'Внутренняя ошибка сервера',
                    error: err
                });
            }
            return res.json(Users);
        });
    },

    /**
     * UsersController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        UsersModel.findOne({id: id}, function (err, Users) {
            if (err) {
                return res.status(500).json({
                    message: 'Внутренняя ошибка сервера',
                    error: err
                });
            }
            if (!Users) {
                return res.status(404).json({
                    message: 'Нет такого пользователя'
                });
            }
            return res.json(Users);
        });
    },

    /**
     * UsersController.create()
     */
    create: function (req, res) {
        bcrypt.genSalt(10, function (error, salt) {
            if (error) {
                res.status(500).json({
                    success: false,
                    message: 'Внутренняя ошибка сервера'
                });
                throw error;
            }
            bcrypt.hash(req.body.password, salt, function (error, hash) {
                if (error) {
                    res.status(500).json({
                        success: false,
                        message: 'Внутренняя ошибка сервера'
                    });
                    throw error;
                }
                var Users = new UsersModel({
              			id : req.body.id,
              			firstName : req.body.firstName,
              			lastName : req.body.lastName,
              			middleName : req.body.middleName,
              			password : req.body.password,
              			dataBirth : req.body.dataBirth,
              			email : req.body.email,
              			position : req.body.position,
              			phone : req.body.phone,
              			employmentDate : req.body.employmentDate,
              			role : req.body.role,
              			createdAt : req.body.createdAt,
              			updatedAt : req.body.updatedAt
                });
                Users.save(function (err, Users) {
                    if (err) {
                        return res.status(500).json({
                            message: 'Внутренняя ошибка сервера',
                            error: err
                        });
                    }
                    return res.status(201).json(Users);
                });
            });
        });
    },

    /**
     * UsersController.update()
     */
    update: function (req, res) {
        var id = req.body.id;
        UsersModel.findOne({id: id}, function (err, Users) {
            if (err) {
                return res.status(500).json({
                    message: 'Внутренняя ошибка сервера',
                    error: err
                });
            }
            if (!Users) {
                return res.status(404).json({
                    message: 'Нет такого пользователя'
                });
            }

            Users.id = req.body.id ? req.body.id : Users.id;
      			Users.firstName = req.body.firstName ? req.body.firstName : Users.firstName;
      			Users.lastName = req.body.lastName ? req.body.lastName : Users.lastName;
      			Users.middleName = req.body.middleName ? req.body.middleName : Users.middleName;
      			Users.password = req.body.password ? req.body.password : Users.password;
      			Users.dataBirth = req.body.dataBirth ? req.body.dataBirth : Users.dataBirth;
      			Users.email = req.body.email ? req.body.email : Users.email;
      			Users.position = req.body.position ? req.body.position : Users.position;
      			Users.phone = req.body.phone ? req.body.phone : Users.phone;
      			Users.employmentDate = req.body.employmentDate ? req.body.employmentDate : Users.employmentDate;
      			Users.role = req.body.role ? req.body.role : Users.role;
      			Users.createdAt = req.body.createdAt ? req.body.createdAt : Users.createdAt;
      			Users.updatedAt = req.body.updatedAt ? req.body.updatedAt : Users.updatedAt;

            Users.save(function (err, Users) {
                if (err) {
                    return res.status(500).json({
                        message: 'Внутренняя ошибка сервера',
                        error: err
                    });
                }

                return res.json(Users);
            });
        });
    },

    /**
     * UsersController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        UsersModel.findByIdAndRemove(id, function (err, Users) {
            if (err) {
                return res.status(500).json({
                    message: 'Внутренняя ошибка сервера',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
