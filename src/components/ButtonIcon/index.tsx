import React, { memo } from 'react';
import { AiFillDelete, AiFillEdit, AiFillCloseCircle } from 'react-icons/ai';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import css from './index.module.css';

type Props = {
  onClick: (event: React.MouseEvent) => void;
};

export const ButtonDelete = memo(({ onClick }: Props) => {
  return (
    <button className={css.root} onClick={onClick}>
      <AiFillDelete />
    </button>
  );
});

export const ButtonClose = memo(({ onClick }: Props) => {
  return (
    <button className={css.root} onClick={onClick}>
      <AiFillCloseCircle />
    </button>
  );
});

export const ButtonEdit = memo(({ onClick }: Props) => {
  return (
    <button className={css.root} onClick={onClick}>
      <AiFillEdit />
    </button>
  );
});

export const ButtonArrowLeft = memo(({ onClick }: Props) => {
  return (
    <button className={css.root} onClick={onClick}>
      <FiChevronLeft />
    </button>
  );
});

export const ButtonArrowRight = memo(({ onClick }: Props) => {
  return (
    <button className={css.root} onClick={onClick}>
      <FiChevronRight />
    </button>
  );
});
