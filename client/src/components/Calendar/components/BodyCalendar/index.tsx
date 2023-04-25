import { memo, useMemo, useEffect } from 'react';

import getKeysEvent from '../../../../helpers/getKeysEvent';
import { OtherDay } from '../Day';
import DayContainer from '../../../../containers/Calendar/DayContainer';
import EventModalContainer from '../../../../containers/Event/EventModalContainer';
import { Event } from '../../../../entities/Event';
import { CalendarDays } from '../../../../entities/Calendar';
import { STATUS } from '../../../../constants';
import Loader from '../../../ui/Loader';
import { formatDate } from '../../../../entities/Calendar/helpers';

import css from './index.module.css';

type Props = {
  auth: boolean;
  events: Event[];
  days: CalendarDays;
  status: STATUS | null;
  selectMonth: number;
  selectYear: number;
  fetchEvents: (start: string, end: string) => void;
};

const Body = memo(
  ({
    selectMonth,
    selectYear,
    status,
    auth,
    days,
    events,
    fetchEvents,
  }: Props) => {
    const { lastMonthDays, currentMonthDays, nextMonthDays } = days;
    const KeysEvents = useMemo(() => getKeysEvent(events), [events]);

    useEffect(() => {
      if (auth) {
        fetchEvents(
          formatDate(selectYear, selectMonth, currentMonthDays[0]),
          formatDate(
            selectYear,
            selectMonth,
            currentMonthDays[currentMonthDays.length - 1]
          )
        );
      }
    }, [auth, fetchEvents, selectYear, selectMonth, currentMonthDays]);

    return (
      <div className={css.root}>
        <Loader isPrimary={false} status={status} />
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
  }
);

export default memo(Body);
