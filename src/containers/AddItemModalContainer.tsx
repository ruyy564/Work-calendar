import { connect } from 'react-redux';

import { RootState } from '../store';
import AddItemModal from '../components/AddItemModal';
import { closeModal } from '../store/featurs/modalSlice';
import { changeEvent, addEvent } from '../store/featurs/eventSlice';
import { MODAL_FORMS } from '../entities/Modal/constants';

const mapState = (state: RootState, { date }: { date: string }) => ({
  date,
});

const mapDispatch = {
  addEvent: (event: any) => addEvent(event),
  changeEvent: (event: any) => changeEvent(event),
  closeModal: () => closeModal(MODAL_FORMS.ADD_ITEM_FORM),
};

const connector = connect(mapState, mapDispatch);

export default connector(AddItemModal);
