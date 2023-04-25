import { connect } from 'react-redux';

import LinkToday from '../components/LinkToday';
import { RootState } from '../store';
import { selectCalendarCurrentDay } from '../entities/Calendar/selectors';
import { toCurrentMonth } from '../store/featurs/calendarSlice';

const mapState = (state: RootState) => ({
  currentDay: selectCalendarCurrentDay(state),
});

const mapDispatch = {
  toCurrentMonth: () => toCurrentMonth(),
};

const connector = connect(mapState, mapDispatch);

export default connector(LinkToday);
