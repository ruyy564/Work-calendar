import { memo } from 'react';

import NavCalendarContainer from '../../containers/Calendar/NavCalendarContainer';
import CalendarHeader from './components/HeaderCalendar';
import BodyCalendarContainer from '../../containers/Calendar/BodyCalendarContainer';

import css from './index.module.css';

const Calendar = memo(() => {
  return (
    <div className={css.root}>
      <NavCalendarContainer />
      <CalendarHeader />
      <BodyCalendarContainer />
    </div>
  );
});

export default Calendar;
