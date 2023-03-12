import { memo, useMemo, useEffect } from 'react';

import getKeysEvent from '../../../../helpers/getKeysEvent';
import { OtherDay } from '../Day';
import DayContainer from '../../../../containers/Calendar/DayContainer';
import EventModalContainer from '../../../../containers/EventModalContainer';
import { Event } from '../../../../entities/Event';
import { CalendarDays } from '../../../../entities/Calendar';

import css from './index.module.css';

type Props = {
  events: Event[];
  days: CalendarDays;
  fetchEvents: () => void;
};

const Body = memo(({ days, events, fetchEvents }: Props) => {
  const { lastMonthDays, currentMonthDays, nextMonthDays } = days;
  const KeysEvents = useMemo(() => getKeysEvent(events), [events]);

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div className={css.root}>
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
