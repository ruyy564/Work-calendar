import { connect } from 'react-redux';

import { RootState } from '../store';
import EventModal from '../components/EventModal';
import { selectEvent } from '../entities/Event/selectors';
import { selectCalendarSelectDate } from '../entities/Calendar/selectors';

const mapState = (state: RootState) => {
  const date = selectCalendarSelectDate(state);

  if (date) {
    const event = selectEvent(state, date);

    if (event?.pieceworks) {
      return { date, type: 'pieceworks' };
    }

    if (event?.timebased) {
      return { date, type: 'timebased' };
    }
  }

  return { date, type: 'none' };
};

const connector = connect(mapState);

export default connector(EventModal);
