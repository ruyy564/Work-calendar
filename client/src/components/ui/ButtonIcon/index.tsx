import React, { memo } from 'react';
import { AiFillDelete, AiFillEdit, AiFillCloseCircle } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { FiLogOut, FiLogIn } from 'react-icons/fi';
import { ImCircleLeft, ImCircleRight } from 'react-icons/im';

import getClasses from '../../../helpers/getClasses';
import { ROUTE_TO_LOGIN } from '../../../routes/constants';

import css from './index.module.css';

type Props = {
  onClick: (event: React.MouseEvent) => void;
};

export const ButtonDelete = memo(({ onClick }: Props) => {
  return (
    <button className={getClasses(css.root, css.btnDark)} onClick={onClick}>
      <AiFillDelete />
    </button>
  );
});

export const ButtonClose = memo(({ onClick }: Props) => {
  return (
    <button className={getClasses(css.root, css.btnDark)} onClick={onClick}>
      <AiFillCloseCircle />
    </button>
  );
});

export const ButtonEdit = memo(({ onClick }: Props) => {
  return (
    <button className={getClasses(css.root, css.btnDark)} onClick={onClick}>
      <AiFillEdit />
    </button>
  );
});

export const ButtonArrowLeft = memo(({ onClick }: Props) => {
  return (
    <button className={getClasses(css.root, css.btnArrow)} onClick={onClick}>
      <ImCircleLeft />
    </button>
  );
});

export const ButtonArrowRight = memo(({ onClick }: Props) => {
  return (
    <button className={getClasses(css.root, css.btnArrow)} onClick={onClick}>
      <ImCircleRight />
    </button>
  );
});

export const ButtonLog = memo(
  ({
    auth,
    logout,
    resetStateEvent,
    resetStateModal,
  }: {
    auth: boolean;
    logout: () => void;
    resetStateModal: () => void;
    resetStateEvent: () => void;
  }) => {
    if (!auth) {
      return (
        <NavLink
          className={getClasses(css.root, css.btnLog)}
          to={ROUTE_TO_LOGIN}
        >
          Войти
          <FiLogIn />
        </NavLink>
      );
    }
    const clickHandler = () => {
      logout();
      resetStateModal();
      resetStateEvent();
    };

    return (
      <button
        className={getClasses(css.root, css.btnLog)}
        onClick={clickHandler}
      >
        Выйти
        <FiLogOut />
      </button>
    );
  }
);
