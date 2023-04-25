import { useNavigate } from 'react-router-dom';

import { useInput } from './useInput';
import { ROUTE_TO_LOGIN, ROUTE_TO_REGISTRATION } from '../routes/constants';

type Props = {
  pathname: string;
  login: (email: string, password: string) => void;
  registration: (email: string, password: string) => void;
  resetStatus: () => void;
};

export const useLogin = ({
  pathname,
  login,
  registration,
  resetStatus,
}: Props) => {
  const email = useInput('');
  const pass = useInput('');
  const navigate = useNavigate();
  const isLogin = pathname !== ROUTE_TO_REGISTRATION;

  const loginHandler = () => {
    navigate(ROUTE_TO_LOGIN);
    login(String(email.value), String(pass.value));
  };

  const registrationHandler = () =>
    registration(String(email.value), String(pass.value));

  const resetHandler = () => {
    clear();
    resetStatus();
  };
  const clear = () => {
    email.clear();
    pass.clear();
  };

  return {
    email,
    pass,
    isLogin,
    loginHandler,
    registrationHandler,
    resetHandler,
    clear,
  };
};
