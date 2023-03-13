import { useLocation } from 'react-router-dom';

import LoginContainer from '../../containers/LoginContainer';
import RegistrationContainer from '../../containers/RegistrationContainer';
import { ROUTE_TO_LOGIN } from '../../routes/constants';

import css from './index.module.css';

const AuthPage = () => {
  const location = useLocation();
  const isLogin = location.pathname === ROUTE_TO_LOGIN;

  return (
    <div className={css.root}>
      {isLogin ? <LoginContainer /> : <RegistrationContainer />}
    </div>
  );
};

export default AuthPage;
