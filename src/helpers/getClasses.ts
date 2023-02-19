const getClasses = (...args: string[]): string =>
  args.reduce((acc, className) => `${acc} ${className}`);

export default getClasses;
