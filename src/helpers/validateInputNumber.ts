const validateInputNumber = (min?: number, max?: number) => {
  return function (current: string) {
    const minCorrent = !min || min <= Number(current);
    const maxCorrent = !max || max >= Number(current);

    return minCorrent && maxCorrent;
  };
};

export default validateInputNumber;
