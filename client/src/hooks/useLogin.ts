import { useInput } from './useInput';

export const useLogin = () => {
  const email = useInput('');
  const pass = useInput('');

  const clear = () => {
    email.clear();
    pass.clear();
  };

  return {
    email,
    pass,
    clear,
  };
};
