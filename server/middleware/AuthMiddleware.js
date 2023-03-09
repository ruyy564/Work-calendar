const ApiError = require('../error/ApiError');
const tokenService = require('../service/TokenService');

const AuthMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return next(ApiError.unauthorizedError());
    }
    const authToken = authHeader.split(' ')[1];

    if (!authToken) {
      return next(ApiError.unauthorizedError());
    }
    const userData = tokenService.validateAccessToken(authToken);

    if (!userData) {
      return next(ApiError.unauthorizedError());
    }
    req.user = userData;
    next();
  } catch (e) {
    return next(ApiError.unauthorizedError());
  }
};

module.exports = AuthMiddleware;
