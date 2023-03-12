import Calendar from '../../components/Calendar';
import ButtonLogout from '../../containers/ButtonLogout';
import CostWorkInMonthContainer from '../../containers/CostWorkInMonthContainer';

import css from './index.module.css';

const CalendarPage = () => {
  return (
    <div className={css.root}>
      <ButtonLogout />
      <Calendar />
      <CostWorkInMonthContainer />
    </div>
  );
};

export default CalendarPage;
