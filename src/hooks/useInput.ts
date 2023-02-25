import { useState, useEffect, useCallback } from 'react';

export const useInput = (initState: string | number, validate?: Function) => {
  const [value, setValue] = useState(initState);

  useEffect(() => {
    setValue(initState);
  }, [initState]);

  const changeHandler = useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      const currentValue = validate
        ? validate(event.currentTarget.value)
        : event.currentTarget.value;

      setValue(currentValue);
    },
    [validate]
  );

  const clear = useCallback(() => {
    setValue(initState);
  }, [initState]);

  return { value, changeHandler, clear };
};
