const getErrorMessage = (errors) =>
  errors.reduce((acc, error) => {
    if (error.param === 'email') {
      acc['email'] = 'Некорректный email';
    } else {
      acc[error.param] = 'Заполните поле';
    }

    return acc;
  }, {});

module.exports = getErrorMessage;
