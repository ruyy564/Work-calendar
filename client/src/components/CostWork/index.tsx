import { memo, useEffect } from 'react';

import { STATUS } from '../../constants';
import Loader from '../ui/Loader';
import { Event } from '../../entities/Event';

import css from './index.module.css';

type Props = {
  events: Event[];
  firstAndLastDayFullDate: { firstDay: string; lastDay: string };
  cost: number;
  status: STATUS | null;
  fetchEventsCostByPeriod: (start: string, end: string) => void;
};

const CostWorkComponent = memo(
  ({
    events,
    firstAndLastDayFullDate,
    fetchEventsCostByPeriod,
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

const CostWork = memo(
  ({
    events,
    firstAndLastDayFullDate,
    fetchEventsCostByPeriod,
    auth,
    cost,
    status,
  }: Props & { auth: boolean }) => {
    if (!auth) {
      return null;
    }

    return (
      <CostWorkComponent
        events={events}
        firstAndLastDayFullDate={firstAndLastDayFullDate}
        fetchEventsCostByPeriod={fetchEventsCostByPeriod}
        cost={cost}
        status={status}
      />
    );
  }
);

export default CostWork;
