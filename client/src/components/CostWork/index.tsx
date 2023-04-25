import { memo, useEffect } from 'react';

import { STATUS } from '../../constants';
import Loader from '../ui/Loader';
import { Event } from '../../entities/Event';

import css from './index.module.css';

type Props = {
  events: Event[];
  firstAndLastDayFullDate: { firstDay: string; lastDay: string };
  cost: number;
  auth: boolean;
  status: STATUS | null;
  fetchEventsCostByPeriod: (start: string, end: string) => void;
};

const CostWork = memo(
  ({
    events,
    firstAndLastDayFullDate,
    fetchEventsCostByPeriod,
    auth,
    cost,
    status,
  }: Props) => {
    useEffect(() => {
      fetchEventsCostByPeriod(
        firstAndLastDayFullDate.firstDay,
        firstAndLastDayFullDate.lastDay
      );
    }, [
      events,
      fetchEventsCostByPeriod,
      firstAndLastDayFullDate.firstDay,
      firstAndLastDayFullDate.lastDay,
    ]);

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
  }
);

export default CostWork;
