const Router = require('express');
const UserController = require('../controllers/UserController');
const { body } = require('express-validator');

const router = new Router();

router.post(
  '/registration',
  body('email').isEmail(),
  body('password').isLength({ min: 1 }),
  UserController.registration
);

router.post(
  '/login',
  body('email').isEmail(),
  body('password').isLength({ min: 1 }),
  UserController.login
);

router.post('/logout', UserController.logout);

module.exports = router;
