import { connect } from 'react-redux';

import { RootState } from '../store';
import FormTimeBased from '../components/FormTimeBased';
import { selectEventTimeBased } from '../entities/Event/selectors';
import { closeModal } from '../store/featurs/modalSlice';
import {
  changeEvent,
  addEvent,
  deleteEvent,
} from '../store/featurs/eventSlice';
import { MODAL_FORMS } from '../entities/Modal/constants';
import { ActionPayloadAddEvent } from '../store/featurs/eventSlice';

const mapState = (state: RootState, { date }: { date: string }) => ({
  timeBased: selectEventTimeBased(state, date),
});

const mapDispatch = {
  addEvent: (event: ActionPayloadAddEvent) => addEvent(event),
  changeEvent: (event: ActionPayloadAddEvent) => changeEvent(event),
  closeModal: () => closeModal(MODAL_FORMS.ADD_EVENT_FORM),
  deleteEvent: (date: string) => deleteEvent({ date }),
};

const connector = connect(mapState, mapDispatch);

export default connector(FormTimeBased);
