import { connect } from 'react-redux';

import { RootState } from '../store';
import EventModal from '../components/EventModal';
import { selectEventType } from '../entities/Event/selectors';

export type Props = {
  date: string;
  type?: any;
};

const mapState = (state: RootState, { date }: { date: string }) => ({
  type: selectEventType(state, date),
});

const connector = connect(mapState, null);

export default connector(EventModal);
