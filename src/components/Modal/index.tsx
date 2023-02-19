import React from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Props } from '../../containers/ModalContainer';
import ButtonIcon from '../ButtonIcon';

import css from './index.module.css';

const Modal = ({ children, isOpen, closeModal, modal }: Props) => {
  const stop = (event: React.MouseEvent) => {
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
  };

  const closeModalHandler = (event: React.MouseEvent) => {
    closeModal(modal);
  };

  return (
    <>
      {isOpen && (
        <div className={css.root} onClick={closeModalHandler}>
          <div className={css.form} onClick={stop}>
            <div className={css.buttonClose}>
              <ButtonIcon onClick={closeModalHandler}>
                <AiFillCloseCircle />
              </ButtonIcon>
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
