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
  isWeekend: boolean;
  day: number;
  openModal: () => void;
  setSelectDate: (data: string) => void;
};

type PropsOtherDay = {
  day: number;
  isWeekend: boolean;
};

export const OtherDay = memo(({ day, isWeekend }: PropsOtherDay) => {
  const weekend = isWeekend ? css.weekend : '';

  return (
    <div className={getClasses(css.day, css.blockDay, weekend)}>{day}</div>
  );
});

const Day = memo(
  ({
    day,
    keyEvents,
    currentMonth,
    currentYear,
    currentDay,
    isWeekend,
    openModal,
    setSelectDate,
  }: Props) => {
    const fullDate = formatDate(currentYear, currentMonth, day);
    const hasEventClass = keyEvents[fullDate] ? css.hasEvent : '';
    const isCurrentDayClass = currentDay === fullDate ? css.currentDay : '';
    const weekend = isWeekend ? css.weekend : '';

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
          isCurrentDayClass,
          weekend
        )}
        onClick={clickHandler}
      >
        {day}
      </div>
    );
  }
);

export default Day;
