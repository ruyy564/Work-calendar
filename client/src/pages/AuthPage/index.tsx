import AuthFormContainer from '../../containers/AuthFormContainer';

import css from './index.module.css';

const AuthPage = () => {
  return (
    <div className={css.root}>
      <AuthFormContainer />
    </div>
  );
};

export default AuthPage;
