import NavCalendarContainer from '../../containers/NavCalendarContainer';
import CalendarHeader from '../HeaderCalendar';
import BodyCalendarContainer from '../../containers/BodyCalendarContainer';

import css from './index.module.css';

const Calendar = () => {
  return (
    <div className={css.root}>
      <NavCalendarContainer />
      <CalendarHeader />
      <BodyCalendarContainer />
    </div>
  );
};

export default Calendar;
