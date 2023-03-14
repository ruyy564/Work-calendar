import { NavLink } from 'react-router-dom';

import { ROUTE_TO_REGISTRATION } from '../../routes/constants';
import { useLogin } from '../../hooks/useLogin';
import Input from '../ui/Input';
import Button from '../ui/Button';
import ButtonGroup from '../ui/ButtonGroup';
import { STATUS } from '../../constants';
import Loader from '../ui/Loader';

import css from './index.module.css';

type Props = {
  errorMessage: string | null;
  status:
    | typeof STATUS.loading
    | typeof STATUS.error
    | typeof STATUS.success
    | null;
  login: (email: string, password: string) => void;
};

const Login = ({ status, errorMessage, login }: Props) => {
  const { email, pass } = useLogin();

  const loginHandler = () => login(String(email.value), String(pass.value));

  return (
    <div className={css.root}>
      <div>Авторизация</div>
      {errorMessage && <div className={css.error}>{errorMessage}</div>}
      {status === STATUS.loading && <Loader isPrimary />}
      <div className={css.body}>
        <Input
          type="email"
          onChange={email.changeHandler}
          value={email.value}
          text="Email"
        />
        <Input
          type={'password'}
          onChange={pass.changeHandler}
          value={pass.value}
          text="Пароль"
        />
      </div>
      <ButtonGroup>
        <Button onClick={loginHandler} text="Войти" />
        <div>
          Нет аккаунта?{' '}
          <NavLink to={ROUTE_TO_REGISTRATION}>Регистрация</NavLink>
        </div>
      </ButtonGroup>
    </div>
  );
};

export default Login;
