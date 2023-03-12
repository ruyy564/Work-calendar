import LoginContainer from '../../containers/LoginContainer';

import css from './index.module.css';

const AuthPage = () => {
  return (
    <div className={css.root}>
      <LoginContainer />
    </div>
  );
};

export default AuthPage;
