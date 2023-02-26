import { memo } from 'react';
import { GiMoneyStack } from 'react-icons/gi';
import { FaRubleSign } from 'react-icons/fa';

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
