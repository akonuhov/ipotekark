var router = require('express').Router();

router.use('/api/users', require('./UsersRoutes'));
router.use('/api/credit-object', require('./CreditObjectRoutes'));
router.use('/api/borrowers', require('./BorrowersRoutes'));
router.use('/api/evaluators', require('./EvaluatorsRoutes'));
router.use('/api/providers', require('./ProvidersRoutes'));
router.use('/api/documents', require('./DocumentsRoutes'));

module.exports = router;
