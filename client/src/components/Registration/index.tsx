import { NavLink } from 'react-router-dom';

import { ROUTE_TO_LOGIN } from '../../routes/constants';
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
  registration: (email: string, password: string) => void;
};

const Registration = ({ errorMessage, status, registration }: Props) => {
  const { email, pass } = useLogin();

  const registrationHandler = () =>
    registration(String(email.value), String(pass.value));

  return (
    <div className={css.root}>
      <div>Регистрация</div>
      {errorMessage && <div className={css.error}>{errorMessage}</div>}
      {status === STATUS.success && <div>Пользователь зарегистрирован</div>}
      <div className={css.body}>
        <Loader isPrimary status={status} />
        <Input
          type="email"
          onChange={email.changeHandler}
          value={email.value}
          text="Email"
        />
        <Input
          type={'text'}
          onChange={pass.changeHandler}
          value={pass.value}
          text="Пароль"
        />
      </div>
      <ButtonGroup>
        <Button onClick={registrationHandler} text="Регистрация" />
        <div>
          Есть аккаунт? <NavLink to={ROUTE_TO_LOGIN}>Войти</NavLink>
        </div>
      </ButtonGroup>
    </div>
  );
};

export default Registration;
