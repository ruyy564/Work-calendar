import { memo, useMemo, useEffect } from 'react';

import getKeysEvent from '../../../../helpers/getKeysEvent';
import { OtherDay } from '../Day';
import DayContainer from '../../../../containers/Calendar/DayContainer';
import EventModalContainer from '../../../../containers/Event/EventModalContainer';
import { Event } from '../../../../entities/Event';
import { CalendarDays } from '../../../../entities/Calendar';
import { STATUS } from '../../../../constants';
import Loader from '../../../ui/Loader';

import css from './index.module.css';

type Props = {
  events: Event[];
  days: CalendarDays;
  status:
    | typeof STATUS.loading
    | typeof STATUS.error
    | typeof STATUS.success
    | null;
  fetchEvents: () => void;
};

const Body = memo(({ status, days, events, fetchEvents }: Props) => {
  const { lastMonthDays, currentMonthDays, nextMonthDays } = days;
  const KeysEvents = useMemo(() => getKeysEvent(events), [events]);

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  return (
    <div className={css.root}>
      {status === STATUS.loading && <Loader isPrimary={false} />}
      {lastMonthDays.map((day, index) => (
        <OtherDay key={index} day={day} />
      ))}
      {currentMonthDays.map((day, index) => (
        <DayContainer keyEvents={KeysEvents} day={day} key={index} />
      ))}
      {nextMonthDays.map((day, index) => (
        <OtherDay key={index} day={day} />
      ))}
      <EventModalContainer />
    </div>
  );
});

export default memo(Body);
