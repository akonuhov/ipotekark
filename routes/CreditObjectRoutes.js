var express = require('express');
var router = express.Router();
var CreditObjectController = require('../controllers/CreditObjectController.js');

/*
 * GET
 */
router.get('/', CreditObjectController.list);

/*
 * GET
 */
router.get('/:id', CreditObjectController.show);

/*
 * POST
 */
router.post('/', CreditObjectController.create);

/*
 * PUT
 */
router.put('/:id', CreditObjectController.update);

/*
 * DELETE
 */
router.delete('/:id', CreditObjectController.remove);

module.exports = router;
