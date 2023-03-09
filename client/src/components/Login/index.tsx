import { useLogin } from '../../hooks/useLogin';
import Input from '../Input';
import Button from '../Button';
import ButtonGroup from '../ButtonGroup';

import css from './index.module.css';

type Props = {};

const Login = ({}: Props) => {
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
        <Button onClick={() => {}} text="Войти" />
        <Button onClick={() => {}} text="Регистрация" />
      </ButtonGroup>
    </div>
  );
};

export default Login;
