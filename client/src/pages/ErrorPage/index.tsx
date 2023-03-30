import { NavLink } from 'react-router-dom';

import css from './index.module.css';

const ErrorPage = () => {
  return (
    <div className={css.root}>
      <h1 className={css.error}>Error 404</h1>
      <NavLink to={'/'} className={css.link}>
        На главную{' '}
      </NavLink>
    </div>
  );
};

export default ErrorPage;
