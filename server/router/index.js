const Router = require('express');
const userRouter = require('./userRouter');
const eventRouter = require('./eventRouter');

const router = new Router();

router.use('/auth', userRouter);
router.use('/event', eventRouter);

module.exports = router;
