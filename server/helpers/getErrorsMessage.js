const getErrorMessage = (errors) => {
  const message = errors.errors.map((error) => {
    if (error.param === 'email') {
      return 'Некорректный email';
    }

    if (error.param === 'password') {
      return 'Некорректный пароль';
    }
  });

  return message.join('/');
};

module.exports = getErrorMessage;
