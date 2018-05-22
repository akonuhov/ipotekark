var express = require('express');
var router = express.Router();
var DocumentsController = require('../controllers/DocumentsController.js');

/*
 * GET
 */
router.get('/', DocumentsController.list);

/*
 * GET
 */
router.get('/:id', DocumentsController.show);

/*
 * POST
 */
router.post('/', DocumentsController.create);

/*
 * PUT
 */
router.put('/:id', DocumentsController.update);

/*
 * DELETE
 */
router.delete('/:id', DocumentsController.remove);

module.exports = router;
