import { useState } from 'react';

export const useInput = (initState: string, validate?: Function) => {
  const [value, setValue] = useState(initState);

  const changeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    const currentValue = event.currentTarget.value;

    if (!validate || validate(currentValue)) {
      setValue(event.currentTarget.value);
    }
  };

  const clearValue = () => {
    setValue(initState);
  };

  return { value, changeHandler, clearValue };
};
