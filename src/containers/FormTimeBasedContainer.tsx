import { connect } from 'react-redux';

import { RootState } from '../store';
import FormTimeBased from '../components/FormTimeBased';
import { selectEventData } from '../entities/Event/selectors';
import { TYPE_WORK } from '../entities/Event/constants';
import { EventPayload } from '../entities/Event';
import { closeModal } from '../store/featurs/modalSlice';
import {
  changeEvent,
  addEvent,
  deleteEvent,
} from '../store/featurs/eventSlice';
import { MODAL_FORMS } from '../entities/Modal/constants';

export type Props = {
  type: TYPE_WORK;
  date: string;
  data: any;
  addEvent: (event: any) => void;
  saveEvent: (event: EventPayload) => void;
  closeModal: () => void;
  deleteEvent: (date: string) => void;
};

const mapState = (state: RootState, { date }: { date: string }) => ({
  date,
  data: selectEventData(state, date),
  type: TYPE_WORK.TIME_BASED,
});

const mapDispatch = {
  addEvent: (event: any) => addEvent(event),
  // saveEvent: (event: EventPayload) => changeEvent(event),
  saveEvent: (event: EventPayload) => {},
  closeModal: () => closeModal(MODAL_FORMS.ADD_EVENT_FORM),
  deleteEvent: (date: string) => deleteEvent(date),
};

const connector = connect(mapState, mapDispatch);

export default connector(FormTimeBased);
