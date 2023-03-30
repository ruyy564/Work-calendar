import React, { memo } from 'react';
import { AiFillDelete, AiFillEdit, AiFillCloseCircle } from 'react-icons/ai';
import { FiLogOut } from 'react-icons/fi';
import { ImCircleLeft, ImCircleRight } from 'react-icons/im';

import getClasses from '../../../helpers/getClasses';

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

export const ButtonLogout = memo(({ onClick }: Props) => {
  return (
    <button className={getClasses(css.root, css.btnLogout)} onClick={onClick}>
      <FiLogOut />
    </button>
  );
});
