import { memo } from 'react';
import { BiCalendar } from 'react-icons/bi';

import { getCurrentMonth } from '../../entities/Calendar/helpers';
import { ButtonArrowLeft, ButtonArrowRight } from '../ButtonIcon';

import css from './index.module.css';

type Props = {
  currentDay: string;
  selectMonth: number;
  selectYear: number;
  nextMonth: () => void;
  prevMonth: () => void;
  toCurrentMonth: () => void;
};

const Nav = memo(
  ({
    currentDay,
    selectMonth,
    selectYear,
    nextMonth,
    prevMonth,
    toCurrentMonth,
  }: Props) => {
    const [day, month, year] = currentDay.split('-');
    return (
      <div className={css.root}>
        <div className={css.nav}>
          <ButtonArrowLeft onClick={prevMonth} />
          <span className={css.month}>{getCurrentMonth(selectMonth)}</span>
          <span>{selectYear}</span>
          <ButtonArrowRight onClick={nextMonth} />
        </div>
        <div className={css.today} onClick={toCurrentMonth}>
          <BiCalendar />
          <span>
            {day}-{+month + 1}-{year}
          </span>
        </div>
      </div>
    );
  }
);

export default Nav;
