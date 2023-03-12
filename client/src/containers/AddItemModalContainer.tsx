import { connect } from 'react-redux';

import AddItemModal from '../components/AddItemModal';
import { closeModal } from '../store/featurs/modalSlice';
import { CreateEvent } from '../entities/Event';
import {
  createEvent,
  addPieceWorkToEvent,
  updatePieceworkEvent,
} from '../store/featurs/Event/actions';
import { MODAL_FORMS } from '../entities/Modal/constants';

const mapDispatch = {
  createEvent: (event: CreateEvent) => createEvent({ event }),
  addEvent: (event: CreateEvent) => addPieceWorkToEvent({ event }),
  changeEvent: (event: CreateEvent) => updatePieceworkEvent({ event }),
  closeModal: () => closeModal(MODAL_FORMS.ADD_ITEM_FORM),
};

const connector = connect(null, mapDispatch);

export default connector(AddItemModal);
