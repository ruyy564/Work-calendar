import React from 'react';

import { Modal as ModalType } from '../../entities/Modal';
import { ButtonClose } from '../ButtonIcon';

import css from './index.module.css';

type Props = {
  children?: React.ReactNode;
  isOpen: boolean;
  modal: ModalType;
  closeModal: (modal: ModalType) => void;
};

const Modal = ({ children, isOpen, closeModal, modal }: Props) => {
  const stopPropagation = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  const closeModalHandler = () => {
    closeModal(modal);
  };

  return (
    <React.Fragment>
      {isOpen && (
        <div className={css.root} onClick={closeModalHandler}>
          <div className={css.form} onClick={stopPropagation}>
            <div className={css.buttonClose}>
              <ButtonClose onClick={closeModalHandler} />
            </div>
            {children}
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Modal;
