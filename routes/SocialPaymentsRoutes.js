var express = require('express');
var router = express.Router();
var SocialPaymentsController = require('../controllers/SocialPaymentsController.js');

/*
 * GET
 */
router.get('/', SocialPaymentsController.list);

/*
 * GET
 */
router.get('/:id', SocialPaymentsController.show);

/*
 * POST
 */
router.post('/', SocialPaymentsController.create);

/*
 * PUT
 */
router.put('/:id', SocialPaymentsController.update);

/*
 * DELETE
 */
router.delete('/:id', SocialPaymentsController.remove);

module.exports = router;
