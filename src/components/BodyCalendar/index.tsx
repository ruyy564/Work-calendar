import { memo, useState } from 'react';

import EventModalContainer from '../../containers/EventModalContainer';
import { CalendarDays } from '../../entities/Calendar';

import getClasses from '../../helpers/getClasses';
import css from './index.module.css';

type Props = {
  currentDay: string;
  currentMonth: number;
  currentYear: number;
  days: CalendarDays;
  openModal: () => void;
};

const Body = ({
  days,
  openModal,
  currentMonth,
  currentYear,
  currentDay,
}: Props) => {
  const { lastMonthDays, currentMonthDays, nextMonthDays } = days;
  const [selectDate, setSelectDate] = useState('');

  const clickHandler = (date: number) => {
    setSelectDate(`${date}-${currentMonth + 1}-${currentYear}`);
    openModal();
  };

  return (
    <div className={css.root}>
      {lastMonthDays.map((date, index) => (
        <div className={getClasses(css.day, css.blockDay)} key={index}>
          {date}
        </div>
      ))}
      {currentMonthDays.map((date, index) => (
        <div
          className={getClasses(
            css.day,
            css.currentMonth,
            currentDay === `${date}-${currentMonth}-${currentYear}`
              ? css.currentDay
              : ''
          )}
          key={index}
          onClick={() => clickHandler(date)}
        >
          {date}
        </div>
      ))}
      {nextMonthDays.map((date, index) => (
        <div className={getClasses(css.day, css.blockDay)} key={index}>
          {date}
        </div>
      ))}
      <EventModalContainer date={selectDate} />
    </div>
  );
};

export default memo(Body);
