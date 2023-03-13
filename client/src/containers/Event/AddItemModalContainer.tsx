import { connect } from 'react-redux';

import { RootState } from '../../store';
import AddItemModal from '../../components/Event/AddItemModal';
import { closeModal } from '../../store/featurs/modalSlice';
import { CreateEvent } from '../../entities/Event';
import {
  createEvent,
  addPieceWorkToEvent,
  updatePieceworkEvent,
} from '../../services/event';
import { getEventId } from '../../entities/Event/getters';
import { MODAL_FORMS } from '../../entities/Modal/constants';
import { selectEvent } from '../../entities/Event/selectors';

const mapState = (state: RootState, { date }: { date: string }) => {
  const event = selectEvent(state, date);

  return {
    EventId: event ? getEventId(event) : undefined,
  };
};

const mapDispatch = {
  createEvent: (event: CreateEvent) => createEvent({ event }),
  addEvent: (event: CreateEvent) => addPieceWorkToEvent({ event }),
  changeEvent: (event: CreateEvent) => updatePieceworkEvent({ event }),
  closeModal: () => closeModal(MODAL_FORMS.ADD_ITEM_FORM),
};

const connector = connect(mapState, mapDispatch);

export default connector(AddItemModal);
