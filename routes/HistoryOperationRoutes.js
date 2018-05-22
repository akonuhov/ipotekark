var express = require('express');
var router = express.Router();
var HistoryOperationController = require('../controllers/HistoryOperationController.js');

/*
 * GET
 */
router.get('/', HistoryOperationController.list);

/*
 * GET
 */
router.get('/:id', HistoryOperationController.show);

/*
 * POST
 */
router.post('/', HistoryOperationController.create);

/*
 * PUT
 */
router.put('/:id', HistoryOperationController.update);

/*
 * DELETE
 */
router.delete('/:id', HistoryOperationController.remove);

module.exports = router;
