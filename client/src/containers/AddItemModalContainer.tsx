import { connect } from 'react-redux';

import AddItemModal from '../components/AddItemModal';
import { closeModal } from '../store/featurs/modalSlice';
import { changeEvent, addEvent } from '../store/featurs/eventSlice';
import { MODAL_FORMS } from '../entities/Modal/constants';
import { ActionPayloadAddEvent } from '../store/featurs/eventSlice';

const mapDispatch = {
  addEvent: (event: ActionPayloadAddEvent) => addEvent(event),
  changeEvent: (event: ActionPayloadAddEvent) => changeEvent(event),
  closeModal: () => closeModal(MODAL_FORMS.ADD_ITEM_FORM),
};

const connector = connect(null, mapDispatch);

export default connector(AddItemModal);
