import { connect } from 'react-redux';

import { RootState } from '../store';
import AddItemModal from '../components/AddItemModal';
import { closeModal } from '../store/featurs/modalSlice';
import { CreateEvent } from '../entities/Event';
import {
  createEvent,
  addPieceWorkToEvent,
  updatePieceworkEvent,
} from '../services/event';
import { MODAL_FORMS } from '../entities/Modal/constants';
import { selectEvent } from '../entities/Event/selectors';

const mapState = (state: RootState, { date }: { date: string }) => ({
  EventId: selectEvent(state, date)?.id,
});

const mapDispatch = {
  createEvent: (event: CreateEvent) => createEvent({ event }),
  addEvent: (event: CreateEvent) => addPieceWorkToEvent({ event }),
  changeEvent: (event: CreateEvent) => updatePieceworkEvent({ event }),
  closeModal: () => closeModal(MODAL_FORMS.ADD_ITEM_FORM),
};

const connector = connect(mapState, mapDispatch);

export default connector(AddItemModal);
