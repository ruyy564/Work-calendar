import { useInput } from './useInput';
import validateInputNumber from '../helpers/validateInputNumber';

const validateInput = validateInputNumber(0);

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
