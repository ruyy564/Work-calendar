import { connect } from 'react-redux';

import BodyCalendar from '../components/BodyCalendar';
import { RootState } from '../store';
import { selectCalendarDays } from '../entities/Calendar/selectors';
import { selectEvents } from '../entities/Event/selectors';

const mapState = (state: RootState) => ({
  days: selectCalendarDays(state),
  events: selectEvents(state),
});

const connector = connect(mapState);

export default connector(BodyCalendar);
