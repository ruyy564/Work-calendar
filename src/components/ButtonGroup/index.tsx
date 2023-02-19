import React from 'react';

import css from './index.module.css';

type Props = {
  children: React.ReactNode;
};

const ButtonGroup = ({ children }: Props) => {
  return <div className={css.root}>{children}</div>;
};

export default ButtonGroup;
