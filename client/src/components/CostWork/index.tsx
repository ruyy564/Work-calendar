import { memo } from 'react';

import { STATUS } from '../../constants';
import Loader from '../ui/Loader';

import css from './index.module.css';

type Props = {
  cost: number;
  status:
    | typeof STATUS.loading
    | typeof STATUS.error
    | typeof STATUS.success
    | null;
};

const CostWork = memo(({ cost, status }: Props) => {
  return (
    <div className={css.root}>
      <div className={css.count}>
        Итог за месяц:{' '}
        {status === STATUS.loading && <Loader isPrimary={false} />} {cost} руб.
      </div>
    </div>
  );
});

export default CostWork;
