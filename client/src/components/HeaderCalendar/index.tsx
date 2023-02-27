import { memo } from 'react';

import { DAYS_OF_WEEK } from '../../entities/Calendar/constants';

import css from './index.module.css';

const Header = memo(() => {
  return (
    <div className={css.root}>
      {DAYS_OF_WEEK.map((dayOfWeek, index) => (
        <div key={index}>{dayOfWeek}</div>
      ))}
    </div>
  );
});

export default Header;
