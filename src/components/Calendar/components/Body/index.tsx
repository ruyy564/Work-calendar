import { CalendarDays } from '../../../../entities/Calendar';

import getClasses from '../../../../helpers/getClasses';
import css from './index.module.css';

type Props = {
  currentMonth: number;
  currentYears: number;
  days: CalendarDays;
  openModal: (date: string) => void;
};

const Body = ({ days, openModal, currentMonth, currentYears }: Props) => {
  const { lastMonthDays, currentMonthDays, nextMonthDays } = days;

  return (
    <div className={css.root}>
      {lastMonthDays.map((date, index) => (
        <div className={getClasses(css.day, css.blockDay)} key={index}>
          {date}
        </div>
      ))}
      {currentMonthDays.map((date, index) => (
        <div
          className={getClasses(css.day, css.currentMonth)}
          key={index}
          onClick={() =>
            openModal(`${date}-${currentMonth + 1}-${currentYears}`)
          }
        >
          {date}
        </div>
      ))}
      {nextMonthDays.map((date, index) => (
        <div className={getClasses(css.day, css.blockDay)} key={index}>
          {date}
        </div>
      ))}
    </div>
  );
};

export default Body;
