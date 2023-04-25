import { memo } from 'react';

import { KeyEvents } from '../../../../helpers/getKeysEvent';
import { formatDate } from '../../../../entities/Calendar/helpers';
import getClasses from '../../../../helpers/getClasses';

import css from './index.module.css';

type Props = {
  keyEvents: KeyEvents;
  currentDay: string;
  currentMonth: number;
  currentYear: number;
  day: number;
  openModal: () => void;
  setSelectDate: (data: string) => void;
};

type PropsOtherDay = {
  day: number;
};

export const OtherDay = memo(({ day }: PropsOtherDay) => {
  return <div className={getClasses(css.day, css.blockDay)}>{day}</div>;
});

const Day = memo(
  ({
    day,
    keyEvents,
    currentMonth,
    currentYear,
    currentDay,
    openModal,
    setSelectDate,
  }: Props) => {
    const fullDate = formatDate(currentYear, currentMonth, day);
    const hasEventClass = keyEvents[fullDate] ? css.hasEvent : '';
    const isCurrentDayClass = currentDay === fullDate ? css.currentDay : '';

    const clickHandler = () => {
      setSelectDate(fullDate);
      openModal();
    };

    return (
      <div
        className={getClasses(
          css.day,
          css.currentMonth,
          hasEventClass,
          isCurrentDayClass
        )}
        onClick={clickHandler}
      >
        {day}
      </div>
    );
  }
);

export default Day;
