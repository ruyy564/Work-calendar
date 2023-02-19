import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import ButtonIcon from '../../../ButtonIcon';

import css from './index.module.css';

type Props = {
  currentDay: string;
  selectMonth: string;
  selectYear: number;
  nextMonth: () => void;
  prevMonth: () => void;
};

const Nav = ({ selectMonth, selectYear, nextMonth, prevMonth }: Props) => {
  return (
    <div className={css.root}>
      <div className={css.nav}>
        <ButtonIcon onClick={prevMonth}>
          <FiChevronLeft />
        </ButtonIcon>
        <span className={css.month}>{selectMonth}</span>{' '}
        <span>{selectYear}</span>
        <ButtonIcon onClick={nextMonth}>
          <FiChevronRight />
        </ButtonIcon>
      </div>
    </div>
  );
};

export default Nav;
