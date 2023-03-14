const { validationResult } = require('express-validator');
const UserService = require('../service/UserService');
const ApiError = require('../error/ApiError');
const getErrorMessage = require('../helpers/getErrorsMessage');

class UserController {
  async registration(req, res, next) {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return next(ApiError.badRequest(getErrorMessage(errors)));
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
        return next(ApiError.badRequest(getErrorMessage(errors)));
      }
      const { email, password } = req.body;
      const userData = await UserService.login(email, password);

      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new UserController();
