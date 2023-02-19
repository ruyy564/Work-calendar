import { MODAL_FORMS } from '../../../../entities/Modal/constants';
import { Modal } from '../../../../entities/Modal';
import { CalendarDays } from '../../../../entities/Calendar';

import getClasses from '../../../../helpers/getClasses';
import css from './index.module.css';

type Props = {
  currentDay: string;
  currentMonth?: string;
  currentYears?: string;
  days: CalendarDays;
  openModal: (modal: Modal) => void;
};

const Body = ({ days, openModal, currentDay }: Props) => {
  const { lastMonthDays, currentMonthDays, nextMonthDays } = days;
  console.log(currentDay);
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
          onClick={() => openModal(MODAL_FORMS.ADD_EVENT_FORM)}
        >
          {/* {currentDay === `${date}-${'1'}-${2023}` ? 'yes' : 'no'} */}
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
