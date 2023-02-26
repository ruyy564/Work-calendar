const spilteDate = (date: string) => {
  const [day, month, year] = date.split('-');

  return { day, month, year };
};

export default spilteDate;
