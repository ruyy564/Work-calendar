const validateInputNumber = (min: number, max?: number) => {
  return function (current: number): string {
    return String(
      max
        ? Math.max(min, Math.min(max, Number(current)))
        : Math.max(min, Number(current))
    );
  };
};

export default validateInputNumber;
