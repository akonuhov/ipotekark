var express = require('express');
var router = express.Router();
var BorrowersController = require('../controllers/BorrowersController.js');

/*
 * GET
 */
router.get('/', BorrowersController.list);

/*
 * GET
 */
router.get('/:id', BorrowersController.show);

/*
 * POST
 */
router.post('/', BorrowersController.create);

/*
 * PUT
 */
router.put('/:id', BorrowersController.update);

/*
 * DELETE
 */
router.delete('/:id', BorrowersController.remove);

module.exports = router;
