const spilteDate = (date: string) => {
  const [year, month, day] = date.split('-');

  return { day, month, year };
};

export default spilteDate;
