import { connect } from 'react-redux';

import { RootState } from '../store';
import { TYPE_WORK } from '../entities/Event/constants';
import EventModal from '../components/EventModal';
import { selectEvent } from '../entities/Event/selectors';

const mapState = (state: RootState, { date }: { date: string }) => {
  const event = selectEvent(state, date);

  if (event && TYPE_WORK.PIECE_WORK in event) {
    return { type: TYPE_WORK.PIECE_WORK };
  }

  if (event && TYPE_WORK.TIME_BASED in event) {
    return { type: TYPE_WORK.TIME_BASED };
  }

  return { type: TYPE_WORK.NONE };
};

const connector = connect(mapState);

export default connector(EventModal);
