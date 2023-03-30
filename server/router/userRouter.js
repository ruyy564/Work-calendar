const Router = require('express');
const UserController = require('../controllers/UserController');
const { body } = require('express-validator');

const router = new Router();

router.post(
  '/registration',
  body('email').isEmail(),
  body('password').not().isEmpty(),
  UserController.registration
);

router.post(
  '/login',
  body('email').isEmail(),
  body('password').not().isEmpty(),
  UserController.login
);

router.get('/activate/:link', UserController.activate);

router.get('/send-activation-email/:link', UserController.sendActivationEmail);

module.exports = router;
