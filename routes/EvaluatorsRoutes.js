var express = require('express');
var router = express.Router();
var EvaluatorsController = require('../controllers/EvaluatorsController.js');

/*
 * GET
 */
router.get('/', EvaluatorsController.list);

/*
 * GET
 */
router.get('/:id', EvaluatorsController.show);

/*
 * POST
 */
router.post('/', EvaluatorsController.create);

/*
 * PUT
 */
router.put('/:id', EvaluatorsController.update);

/*
 * DELETE
 */
router.delete('/:id', EvaluatorsController.remove);

module.exports = router;
