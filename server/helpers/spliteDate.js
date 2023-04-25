const spilteDate = (date) => {
  const [year, month, day] = date.split('-');

  return { day, month, year };
};

module.exports = spilteDate;
