import React, { useCallback } from 'react';

import { Modal as ModalType } from '../../../entities/Modal';
import { ButtonClose } from '../ButtonIcon';
import getClasses from '../../../helpers/getClasses';

import css from './index.module.css';

type Props = {
  children?: React.ReactNode;
  isOpen: boolean;
  modal: ModalType;
  closeModal: (modal: ModalType) => void;
};

const Modal = ({ children, isOpen, closeModal, modal }: Props) => {
  const stopPropagation = useCallback((event: React.MouseEvent) => {
    event.stopPropagation();
  }, []);

  const closeModalHandler = useCallback(() => {
    closeModal(modal);
  }, [closeModal, modal]);

  return (
    <React.Fragment>
      <div
        className={isOpen ? getClasses(css.root, css.active) : css.root}
        onClick={closeModalHandler}
      >
        <div className={css.form} onClick={stopPropagation}>
          <div className={css.buttonClose}>
            <ButtonClose onClick={closeModalHandler} />
          </div>
          {children}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Modal;
