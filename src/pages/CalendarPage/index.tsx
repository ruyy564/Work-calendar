import Calendar from '../../components/Calendar';
import CostWorkInMonthContainer from '../../containers/CostWorkInMonthContainer';

import css from './index.module.css';

const CalendarPage = () => {
  return (
    <div className={css.root}>
      <Calendar />
      <CostWorkInMonthContainer />
    </div>
  );
};

export default CalendarPage;
