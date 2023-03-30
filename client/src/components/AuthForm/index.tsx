import { NavLink, useLocation } from 'react-router-dom';

import { ROUTE_TO_REGISTRATION } from '../../routes/constants';
import { useLogin } from '../../hooks/useLogin';
import Input from '../ui/Input';
import Button from '../ui/Button';
import ButtonGroup from '../ui/ButtonGroup';
import { STATUS } from '../../constants';
import Loader from '../ui/Loader';
import { Error } from '../../entities/User';
import {
  ROUTE_TO_REGISTRATION_COMPLITE,
  ROUTE_TO_EMAIL_SEND,
  ROUTE_TO_LOGIN,
} from '../../routes/constants';

import css from './index.module.css';

type Props = {
  errors: Error | null;
  message: string | null;
  status:
    | typeof STATUS.loading
    | typeof STATUS.error
    | typeof STATUS.success
    | null;
  resetStatus: () => void;
  login: (email: string, password: string) => void;
  registration: (email: string, password: string) => void;
};

const AuthForm = ({
  status,
  errors,
  message,
  login,
  registration,
  resetStatus,
}: Props) => {
  const { pathname } = useLocation();
  const { email, pass, clear } = useLogin();

  const isEmailConfirmed = pathname === ROUTE_TO_REGISTRATION_COMPLITE;
  const isEmailSend = pathname === ROUTE_TO_EMAIL_SEND;
  const isLogin =
    pathname === ROUTE_TO_LOGIN || isEmailConfirmed || isEmailSend;

  const loginHandler = () => login(String(email.value), String(pass.value));

  const registrationHandler = () =>
    registration(String(email.value), String(pass.value));

  const resetHandler = () => {
    clear();
    resetStatus();
  };

  return (
    <div className={css.root}>
      {isLogin ? <div>Авторизация</div> : <div>Регистрация</div>}
      {isEmailConfirmed && <div>Ваш email успешно подтвержден</div>}
      {status === STATUS.success && (
        <div>
          На вашу почту {email.value} отправлено письмо для подтверждения email{' '}
        </div>
      )}
      {isEmailSend && <div>Письмо отправлено</div>}
      {message && <div className={css.error}>{message}</div>}
      {Boolean(errors && errors['sendActivationEmail']) && (
        <NavLink
          to={(errors && errors['sendActivationEmail']) || '#'}
          onClick={resetStatus}
        >
          Отправить еще раз
        </NavLink>
      )}
      <div className={css.body}>
        <Loader isPrimary status={status} />
        <Input
          type="email"
          onChange={email.changeHandler}
          value={email.value}
          text="Email"
          error={Boolean(errors && errors['email'])}
          errorMessage={errors && errors['email']}
        />
        <Input
          type={'password'}
          onChange={pass.changeHandler}
          value={pass.value}
          text="Пароль"
          error={Boolean(errors && errors['password'])}
          errorMessage={errors && errors['password']}
        />
      </div>
      {isLogin ? (
        <ButtonGroup>
          <NavLink to={ROUTE_TO_LOGIN}>
            <Button onClick={loginHandler} text="Войти" />
          </NavLink>
          <div>
            Нет аккаунта?{' '}
            <NavLink to={ROUTE_TO_REGISTRATION} onClick={resetHandler}>
              Регистрация
            </NavLink>
          </div>
        </ButtonGroup>
      ) : (
        <ButtonGroup>
          <Button onClick={registrationHandler} text="Регистрация" />
          <div>
            Есть аккаунт?{' '}
            <NavLink to={ROUTE_TO_LOGIN} onClick={resetHandler}>
              Войти
            </NavLink>
          </div>
        </ButtonGroup>
      )}
    </div>
  );
};

export default AuthForm;
