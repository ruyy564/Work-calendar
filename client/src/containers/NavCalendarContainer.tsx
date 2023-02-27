import { connect } from 'react-redux';

import NavCalendar from '../components/NavCalendar';
import { RootState } from '../store';
import {
  selectCalendarDays,
  selectCalendarSelectMonth,
  selectCalendarSelectYear,
} from '../entities/Calendar/selectors';
import { nextMonth, prevMonth } from '../store/featurs/calendarSlice';

const mapState = (state: RootState) => ({
  days: selectCalendarDays(state),
  selectMonth: selectCalendarSelectMonth(state),
  selectYear: selectCalendarSelectYear(state),
});

const mapDispatch = {
  nextMonth: () => nextMonth(),
  prevMonth: () => prevMonth(),
};

const connector = connect(mapState, mapDispatch);

export default connector(NavCalendar);
