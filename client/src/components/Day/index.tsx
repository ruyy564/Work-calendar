import { memo } from 'react';

import { KeyEvents } from '../../helpers/getKeysEvent';

import getClasses from '../../helpers/getClasses';
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
    const clickHandler = () => {
      setSelectDate(`${day}-${currentMonth + 1}-${currentYear}`);
      openModal();
    };
    const hasEventClass = keyEvents[`${day}-${currentMonth + 1}-${currentYear}`]
      ? css.hasEvent
      : '';
    const isCurrentDayClass =
      currentDay === `${day}-${currentMonth}-${currentYear}`
        ? css.currentDay
        : '';

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
