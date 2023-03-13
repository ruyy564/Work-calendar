import { NavLink, useLocation } from 'react-router-dom';

import { ROUTE_TO_LOGIN, ROUTE_TO_REGISTRATION } from '../../routes/constants';
import { useLogin } from '../../hooks/useLogin';
import Input from '../UI/Input';
import Button from '../UI/Button';
import ButtonGroup from '../UI/ButtonGroup';
import { STATUS } from '../../entities/User/constants';

import css from './index.module.css';

type Props = {
  errorMessage: string | null;
  status:
    | typeof STATUS.loading
    | typeof STATUS.error
    | typeof STATUS.success
    | null;
  login: (email: string, password: string) => void;
  registration: (email: string, password: string) => void;
};

const Login = ({ errorMessage, status, login, registration }: Props) => {
  const location = useLocation();
  const { email, pass } = useLogin();
  const isLogin = location.pathname === ROUTE_TO_LOGIN;

  const loginHandler = () => login(String(email.value), String(pass.value));
  const registrationHandler = () =>
    registration(String(email.value), String(pass.value));

  return (
    <div className={css.root}>
      {isLogin ? <div>Авторизация</div> : <div>Регистрация</div>}
      {errorMessage && <div>{errorMessage}</div>}
      {!isLogin && status === STATUS.success ? (
        <div>Пользователь зарегистрирован</div>
      ) : null}
      <div className={css.body}>
        <Input
          type="email"
          onChange={email.changeHandler}
          value={email.value}
          text="Email"
        />
        <Input
          type={isLogin ? 'password' : 'text'}
          onChange={pass.changeHandler}
          value={pass.value}
          text="Пароль"
        />
      </div>
      {isLogin ? (
        <ButtonGroup>
          <Button onClick={loginHandler} text="Войти" />
          <div>
            Нет аккаунта?{' '}
            <NavLink to={ROUTE_TO_REGISTRATION}>Регистрация</NavLink>
          </div>
        </ButtonGroup>
      ) : (
        <ButtonGroup>
          <Button onClick={registrationHandler} text="Регистрация" />
          <div>
            Есть аккаунт? <NavLink to={ROUTE_TO_LOGIN}>Войти</NavLink>
          </div>
        </ButtonGroup>
      )}
    </div>
  );
};

export default Login;
