import { useLogin } from '../../hooks/useLogin';
import Input from '../ui/Input';
import Button from '../ui/Button';
import ButtonGroup from '../ui/ButtonGroup';

import css from './index.module.css';

type Props = {
  login: (email: string, password: string) => void;
};

const Login = ({ login }: Props) => {
  const { email, pass } = useLogin();

  return (
    <div className={css.root}>
      <div>Авторизация</div>
      <div className={css.body}>
        <Input
          type="email"
          onChange={email.changeHandler}
          value={email.value}
          text="Email"
        />
        <Input
          type="password"
          onChange={pass.changeHandler}
          value={pass.value}
          text="Пароль"
        />
      </div>
      <ButtonGroup>
        <Button
          onClick={() => login(String(email.value), String(pass.value))}
          text="Войти"
        />
        <Button onClick={() => {}} text="Регистрация" />
      </ButtonGroup>
    </div>
  );
};

export default Login;
