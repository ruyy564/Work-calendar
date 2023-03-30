import { connect } from 'react-redux';

import { RootState } from '../../store';
import EventModal from '../../components/Event/EventModal';
import { selectEvent } from '../../entities/Event/selectors';
import { selectCalendarSelectDate } from '../../entities/Calendar/selectors';
import {
  getEventPieceworks,
  getEventTimebased,
} from '../../entities/Event/getters';
import { selectUserAuth } from '../../entities/User/selectors';
import { TYPE_WORK } from '../../entities/Event/constants';
import { resetState as resetStateModal } from '../../store/featurs/modalSlice';

const mapState = (state: RootState) => {
  const date = selectCalendarSelectDate(state);

  if (date) {
    const event = selectEvent(state, date);

    if (event && getEventPieceworks(event)?.length) {
      return { date, type: TYPE_WORK.PIECE_WORKS, auth: selectUserAuth(state) };
    }

    if (event && getEventTimebased(event)) {
      return { date, type: TYPE_WORK.TIME_BASED, auth: selectUserAuth(state) };
    }
  }

  return { date, type: TYPE_WORK.NONE, auth: selectUserAuth(state) };
};

const mapDispatch = {
  resetStateModal: () => resetStateModal(),
};

const connector = connect(mapState, mapDispatch);

export default connector(EventModal);
