import { connect } from 'react-redux';

import { RootState } from '../store';
import FormPlacework from '../components/FormPlacework';
import { selectEventData } from '../entities/Event/selectors';
import { TYPE_WORK } from '../entities/Event/constants';
import {
  EventPayload,
  PieceWork,
  TimeBased,
  typePieceWork,
} from '../entities/Event';
import { openModal } from '../store/featurs/modalSlice';
import {
  changeEvent,
  deleteEvent,
  addEvent,
} from '../store/featurs/eventSlice';
import { MODAL_FORMS } from '../entities/Modal/constants';

export type Props = {
  type: TYPE_WORK;
  date: string;
  data?: PieceWork[] | TimeBased;
  addEvent: (event: any) => void;
  saveEvent?: (event: EventPayload) => void;
  openModal: () => void;
  deleteItem: (id: string) => void;
};

const mapState = (state: RootState, { date }: { date: string }) => ({
  date,
  data: selectEventData(state, date),
  type: TYPE_WORK.PIECE_WORK,
});

const mapDispatch = {
  addEvent: (event: any) => addEvent(event),
  openModal: () => openModal(MODAL_FORMS.ADD_ITEM_FORM),
  deleteItem: (id: string) => deleteEvent(id),
};

const connector = connect(mapState, mapDispatch);

export default connector(FormPlacework);
