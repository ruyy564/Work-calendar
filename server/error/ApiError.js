class ApiError extends Error {
  constructor(status, message, errors) {
    super();
    this.status = status;
    this.message = message;
    this.errors = errors;
  }

  static unauthorizedError() {
    return new ApiError(401, 'Пользователь не авторизован');
  }

  static incorrectFormData(errors) {
    return ApiError.badRequest('Некорректные данные', errors);
  }

  static incorrectSendEmail() {
    return ApiError.badRequest(
      'Неудается отправить письмо для подтверждения email'
    );
  }

  static badRequest(message, errors = null) {
    return new ApiError(404, message, errors);
  }

  static forbidden(message) {
    return new ApiError(403, message);
  }

  static internal(message) {
    return new ApiError(500, message);
  }
}

module.exports = ApiError;
