import { memo } from 'react';
import { BiCalendar } from 'react-icons/bi';

import css from './index.module.css';

type Props = {
  day: string;
  month: string;
  year: string;
  toCurrentMonth: () => void;
};

const LinkToday = memo(({ day, month, year, toCurrentMonth }: Props) => {
  return (
    <div className={css.today} onClick={toCurrentMonth}>
      <BiCalendar />
      <span>
        {day}-{Number(month) + 1}-{year}
      </span>
    </div>
  );
});

export default LinkToday;
