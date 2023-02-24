import { useState, useEffect } from 'react';

export const useInput = (initState: string | number, validate?: Function) => {
  const [value, setValue] = useState(initState);

  useEffect(() => {
    setValue(initState);
  }, [initState]);

  const changeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    const currentValue = validate
      ? validate(event.currentTarget.value)
      : event.currentTarget.value;

    setValue(currentValue);
  };

  const clear = () => {
    setValue(initState);
  };

  return { value, changeHandler, clear };
};
