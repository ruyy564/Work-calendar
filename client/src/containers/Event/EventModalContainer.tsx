import { connect } from 'react-redux';

import { RootState } from '../../store';
import EventModal from '../../components/Event/EventModal';
import { selectEvent } from '../../entities/Event/selectors';
import { selectCalendarSelectDate } from '../../entities/Calendar/selectors';
import {
  getEventPieceworks,
  getEventTimebased,
} from '../../entities/Event/getters';
import { TYPE_WORK } from '../../entities/Event/constants';

const mapState = (state: RootState) => {
  const date = selectCalendarSelectDate(state);

  if (date) {
    const event = selectEvent(state, date);

    if (event && getEventPieceworks(event)?.length) {
      return { date, type: TYPE_WORK.PIECE_WORKS };
    }

    if (event && getEventTimebased(event)) {
      return { date, type: TYPE_WORK.TIME_BASED };
    }
  }

  return { date, type: TYPE_WORK.NONE };
};

const connector = connect(mapState);

export default connector(EventModal);
