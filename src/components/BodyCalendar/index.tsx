import { memo, useState } from 'react';

import EventModalContainer from '../../containers/EventModalContainer';
import { KeyEvents } from '../../helpers/getKeysEvent';
import { CalendarDays } from '../../entities/Calendar';

import getClasses from '../../helpers/getClasses';
import css from './index.module.css';

type Props = {
  keyEvents: KeyEvents;
  currentDay: string;
  currentMonth: number;
  currentYear: number;
  days: CalendarDays;
  openModal: () => void;
};

const Body = ({
  days,
  keyEvents,
  openModal,
  currentMonth,
  currentYear,
  currentDay,
}: Props) => {
  const { lastMonthDays, currentMonthDays, nextMonthDays } = days;
  const [selectDate, setSelectDate] = useState('');
  console.log(keyEvents);
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
            keyEvents[`${date}-${currentMonth + 1}-${currentYear}`]
              ? css.hasEvent
              : '',
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
