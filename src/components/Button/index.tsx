import { memo } from 'react';

import css from './index.module.css';

type Props = {
  text: string;
  onClick: () => void;
};

const Button = memo(({ text, onClick }: Props) => {
  return (
    <button className={css.root} onClick={onClick}>
      {text}
    </button>
  );
});

export default Button;
