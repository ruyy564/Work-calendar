import { getCurrentMonth } from '../../../../entities/Calendar/helpers';
import { ButtonArrowLeft, ButtonArrowRight } from '../../../ButtonIcon';

import css from './index.module.css';

type Props = {
  currentDay: string;
  selectMonth: number;
  selectYear: number;
  nextMonth: () => void;
  prevMonth: () => void;
};

const Nav = ({ selectMonth, selectYear, nextMonth, prevMonth }: Props) => {
  return (
    <div className={css.root}>
      <div className={css.nav}>
        <ButtonArrowLeft onClick={prevMonth} />
        <span className={css.month}>{getCurrentMonth(selectMonth)}</span>
        <span>{selectYear}</span>
        <ButtonArrowRight onClick={nextMonth} />
      </div>
    </div>
  );
};

export default Nav;
