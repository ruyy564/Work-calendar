import React from 'react';
import { AiFillDelete, AiFillEdit, AiFillCloseCircle } from 'react-icons/ai';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import css from './index.module.css';

type Props = {
  onClick: (event: React.MouseEvent) => void;
};

export const ButtonDelete = ({ onClick }: Props) => {
  return (
    <button className={css.root} onClick={onClick}>
      <AiFillDelete />
    </button>
  );
};

export const ButtonClose = ({ onClick }: Props) => {
  return (
    <button className={css.root} onClick={onClick}>
      <AiFillCloseCircle />
    </button>
  );
};

export const ButtonEdit = ({ onClick }: Props) => {
  return (
    <button className={css.root} onClick={onClick}>
      <AiFillEdit />
    </button>
  );
};

export const ButtonArrowLeft = ({ onClick }: Props) => {
  return (
    <button className={css.root} onClick={onClick}>
      <FiChevronLeft />
    </button>
  );
};

export const ButtonArrowRight = ({ onClick }: Props) => {
  return (
    <button className={css.root} onClick={onClick}>
      <FiChevronRight />
    </button>
  );
};
