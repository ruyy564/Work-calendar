import { memo } from 'react';

import css from './index.module.css';

type Props = {
  cost: number;
};

const CostWork = memo(({ cost }: Props) => {
  return (
    <div className={css.root}>
      <div>Текущий месяц: {cost} руб.</div>
    </div>
  );
});

export default CostWork;
