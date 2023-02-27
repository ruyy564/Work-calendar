import { connect } from 'react-redux';

import spilteDate from '../helpers/spliteDate';
import LinkToday from '../components/LinkToday';
import { RootState } from '../store';
import { selectCalendarCurrentDay } from '../entities/Calendar/selectors';
import { toCurrentMonth } from '../store/featurs/calendarSlice';

const mapState = (state: RootState) =>
  spilteDate(selectCalendarCurrentDay(state));

const mapDispatch = {
  toCurrentMonth: () => toCurrentMonth(),
};

const connector = connect(mapState, mapDispatch);

export default connector(LinkToday);
