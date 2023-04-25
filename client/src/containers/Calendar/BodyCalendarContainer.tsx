import { connect } from 'react-redux';

import BodyCalendar from '../../components/Calendar/components/BodyCalendar';
import { RootState } from '../../store';
import {
  selectCalendarDays,
  selectCalendarSelectMonth,
  selectCalendarSelectYear,
} from '../../entities/Calendar/selectors';
import { selectEvents, selectStatus } from '../../entities/Event/selectors';
import { selectUserAuth } from '../../entities/User/selectors';
import { fetchEvents } from '../../services/event';

const mapState = (state: RootState) => ({
  auth: selectUserAuth(state),
  status: selectStatus(state),
  days: selectCalendarDays(state),
  events: selectEvents(state),
  selectMonth: selectCalendarSelectMonth(state),
  selectYear: selectCalendarSelectYear(state),
});

const mapDispatch = {
  fetchEvents: (start: string, end: string) => fetchEvents({ start, end }),
};

const connector = connect(mapState, mapDispatch);

export default connector(BodyCalendar);
