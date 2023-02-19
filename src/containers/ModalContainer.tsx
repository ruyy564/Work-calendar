import { connect } from 'react-redux';

import Modal from '../components/Modal';
import { RootState } from '../store';
import { selectModalVisible } from '../entities/Modal/selectors';
import { Modal as ModalType } from '../entities/Modal';
import { closeModal } from '../store/featurs/modalSlice';

export type Props = {
  children?: React.ReactNode;
  isOpen: boolean;
  modal: ModalType;
  closeModal: (modal: ModalType) => void;
};

const mapState = (state: RootState, { modal }: { modal: ModalType }) => ({
  isOpen: selectModalVisible(state, modal),
});

const mapDispatch = {
  closeModal: (modal: ModalType) => closeModal(modal),
};

const connector = connect(mapState, mapDispatch);

export default connector(Modal);
