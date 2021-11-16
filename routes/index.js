const router = require('express').Router();
const homeRouter = require('./homeRouter');
const apiRouter = require('./apiRouter');
router.use('/', homeRouter);
router.use('/api', apiRouter);
module.exports = router;