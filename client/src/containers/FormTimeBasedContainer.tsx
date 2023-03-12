import { connect } from 'react-redux';

import { RootState } from '../store';
import FormTimeBased from '../components/FormTimeBased';
import { selectEventTimebased } from '../entities/Event/selectors';
import { closeModal } from '../store/featurs/modalSlice';
import {
  createEvent,
  updateTamebasedEvent,
} from '../store/featurs/Event/actions';
import { MODAL_FORMS } from '../entities/Modal/constants';
import { Event, CreateEvent } from '../entities/Event';

const mapState = (state: RootState, { date }: { date: string }) => ({
  timebased: selectEventTimebased(state, date),
});

const mapDispatch = {
  createEvent: (event: CreateEvent) => createEvent({ event }),
  changeEvent: (event: CreateEvent) => updateTamebasedEvent({ event }),
  closeModal: () => closeModal(MODAL_FORMS.ADD_EVENT_FORM),
  deleteEvent: (date: string) => {},
};

const connector = connect(mapState, mapDispatch);

export default connector(FormTimeBased);
