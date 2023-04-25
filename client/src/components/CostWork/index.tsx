import { memo } from 'react';

import { STATUS } from '../../constants';
import Loader from '../ui/Loader';

import css from './index.module.css';

type Props = {
  cost: number;
  auth: boolean;
  status: STATUS | null;
};

const CostWork = memo(({ auth, cost, status }: Props) => {
  if (!auth) {
    return null;
  }

  return (
    <div className={css.root}>
      <div className={css.count}>
        <Loader isPrimary={false} status={status} />
        Итог за месяц: {cost} руб.
      </div>
    </div>
  );
});

export default CostWork;
