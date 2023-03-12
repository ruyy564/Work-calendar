import { connect } from 'react-redux';

import BodyCalendar from '../components/BodyCalendar';
import { RootState } from '../store';
import { selectCalendarDays } from '../entities/Calendar/selectors';
import { selectEvents } from '../entities/Event/selectors';
import { fetchEvents } from '../store/featurs/Event/actions';

const mapState = (state: RootState) => ({
  days: selectCalendarDays(state),
  events: selectEvents(state),
});

const mapDispatch = {
  fetchEvents: () => fetchEvents(),
};

const connector = connect(mapState, mapDispatch);

export default connector(BodyCalendar);
