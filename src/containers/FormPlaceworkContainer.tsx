import { connect } from 'react-redux';

import { RootState } from '../store';
import FormPlacework from '../components/FormPlacework';
import { selectEventPiecesWork } from '../entities/Event/selectors';
import { TYPE_WORK } from '../entities/Event/constants';
import { PieceWork, TimeBased } from '../entities/Event';
import { openModal } from '../store/featurs/modalSlice';
import {
  changeEvent,
  deleteEvent,
  addEvent,
} from '../store/featurs/eventSlice';
import { MODAL_FORMS } from '../entities/Modal/constants';

const mapState = (state: RootState, { date }: { date: string }) => ({
  date,
  piecesWork: selectEventPiecesWork(state, date),
});

const mapDispatch = {
  addEvent: (event: any) => addEvent(event),
  openModal: () => openModal(MODAL_FORMS.ADD_ITEM_FORM),
  deleteItem: (date: string, key: string) => deleteEvent({ date, key }),
};

const connector = connect(mapState, mapDispatch);

export default connector(FormPlacework);
