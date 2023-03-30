const { validationResult } = require('express-validator');
const UserService = require('../service/UserService');
const ApiError = require('../error/ApiError');
const getErrorMessage = require('../helpers/getErrorsMessage');

class UserController {
  async registration(req, res, next) {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return next(ApiError.incorrectFormData(getErrorMessage(errors.errors)));
      }
      const { email, password } = req.body;
      const userData = await UserService.registrarion(email, password);

      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }

  async login(req, res, next) {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return next(ApiError.incorrectFormData(getErrorMessage(errors.errors)));
      }
      const { email, password } = req.body;
      const userData = await UserService.login(email, password);

      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }
  async activate(req, res, next) {
    try {
      const { link } = req.params;

      await UserService.activate(link);

      return res.redirect(`${process.env.WEB_URL}/email-confirm`);
    } catch (e) {
      return res.redirect(`${process.env.WEB_URL}/error`);
    }
  }

  async sendActivationEmail(req, res, next) {
    try {
      const { link } = req.params;

      await UserService.sendActivationEmail(link);

      return res.redirect(`${process.env.WEB_URL}/email-send`);
    } catch (e) {
      return res.redirect(`${process.env.WEB_URL}/error`);
    }
  }
}

module.exports = new UserController();
