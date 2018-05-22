var express = require('express');
var router = express.Router();
var ProvidersController = require('../controllers/ProvidersController.js');

/*
 * GET
 */
router.get('/', ProvidersController.list);

/*
 * GET
 */
router.get('/:id', ProvidersController.show);

/*
 * POST
 */
router.post('/', ProvidersController.create);

/*
 * PUT
 */
router.put('/:id', ProvidersController.update);

/*
 * DELETE
 */
router.delete('/:id', ProvidersController.remove);

module.exports = router;
