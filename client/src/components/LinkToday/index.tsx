import { memo } from 'react';
import { BiCalendar } from 'react-icons/bi';

import css from './index.module.css';

type Props = {
  currentDay: string;
  toCurrentMonth: () => void;
};

const LinkToday = memo(({ currentDay, toCurrentMonth }: Props) => {
  return (
    <div className={css.today} onClick={toCurrentMonth}>
      <BiCalendar className={css.icon} />
      <span>{currentDay}</span>
    </div>
  );
});

export default LinkToday;
