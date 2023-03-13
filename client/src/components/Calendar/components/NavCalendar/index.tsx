import { memo } from 'react';

import LinkTodayContainer from '../../../../containers/LinkTodayContainer';
import { getCurrentMonth } from '../../../../entities/Calendar/helpers';
import { ButtonArrowLeft, ButtonArrowRight } from '../../../UI/ButtonIcon';

import css from './index.module.css';

type Props = {
  selectMonth: number;
  selectYear: number;
  nextMonth: () => void;
  prevMonth: () => void;
};

const Nav = memo(({ selectMonth, selectYear, nextMonth, prevMonth }: Props) => (
  <div className={css.root}>
    <div className={css.nav}>
      <ButtonArrowLeft onClick={prevMonth} />
      <span className={css.month}>{getCurrentMonth(selectMonth)}</span>
      <span>{selectYear}</span>
      <ButtonArrowRight onClick={nextMonth} />
    </div>
    <LinkTodayContainer />
  </div>
));

export default Nav;
