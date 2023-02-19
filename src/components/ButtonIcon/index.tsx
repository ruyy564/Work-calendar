import React from 'react';

import css from './index.module.css';

type Props = {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent) => void;
};

const ButtonIcon = ({ children, onClick }: Props) => {
  return (
    <button className={css.root} onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonIcon;
