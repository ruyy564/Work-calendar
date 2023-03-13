import { connect } from 'react-redux';

import Modal from '../components/UI/Modal';
import { selectModalVisible } from '../entities/Modal/selectors';
import { Modal as ModalType } from '../entities/Modal';
import { RootState } from '../store';
import { closeModal } from '../store/featurs/modalSlice';

type Data = {
  modal: ModalType;
};

const mapState = (state: RootState, { modal }: Data) => ({
  isOpen: selectModalVisible(state, modal),
});

const mapDispatch = {
  closeModal: (modal: ModalType) => closeModal(modal),
};

const connector = connect(mapState, mapDispatch);

export default connector(Modal);
