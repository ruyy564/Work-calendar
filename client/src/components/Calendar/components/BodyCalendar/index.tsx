import { memo, useMemo, useEffect } from 'react';

import getKeysEvent from '../../../../helpers/getKeysEvent';
import { OtherDay } from '../Day';
import DayContainer from '../../../../containers/Calendar/DayContainer';
import EventModalContainer from '../../../../containers/Event/EventModalContainer';
import { Event } from '../../../../entities/Event';
import { CalendarDays } from '../../../../entities/Calendar';
import { STATUS } from '../../../../constants';
import Loader from '../../../ui/Loader';
import { getWeekend, isWeekend } from '../../../../entities/Calendar/helpers';
import { WEEKENDS_KEYS } from '../../../../entities/Calendar/constants';

import css from './index.module.css';

type Props = {
  auth: boolean;
  events: Event[];
  days: CalendarDays;
  status: STATUS | null;
  firstAndLastDayFullDate: { firstDay: string; lastDay: string };
  fetchEvents: (start: string, end: string) => void;
};

const Body = memo(
  ({
    firstAndLastDayFullDate,
    status,
    auth,
    days,
    events,
    fetchEvents,
  }: Props) => {
    const { lastMonthDays, currentMonthDays, nextMonthDays } = days;
    const KeysEvents = useMemo(() => getKeysEvent(events), [events]);
    const weekends = getWeekend(days);

    useEffect(() => {
      if (auth) {
        fetchEvents(
          firstAndLastDayFullDate.firstDay,
          firstAndLastDayFullDate.lastDay
        );
      }
    }, [
      auth,
      fetchEvents,
      firstAndLastDayFullDate.firstDay,
      firstAndLastDayFullDate.lastDay,
    ]);

    return (
      <div className={css.root}>
        <Loader isPrimary={false} status={status} />
        {lastMonthDays.map((day, index) => (
          <OtherDay
            key={index}
            day={day}
            isWeekend={isWeekend(
              weekends,
              WEEKENDS_KEYS.lastMonthDaysWeekend,
              day
            )}
          />
        ))}
        {currentMonthDays.map((day, index) => (
          <DayContainer
            keyEvents={KeysEvents}
            day={day}
            key={index}
            isWeekend={isWeekend(
              weekends,
              WEEKENDS_KEYS.currentMonthDaysWeekend,
              day
            )}
          />
        ))}
        {nextMonthDays.map((day, index) => (
          <OtherDay
            key={index}
            day={day}
            isWeekend={isWeekend(
              weekends,
              WEEKENDS_KEYS.nextMonthDaysWeekend,
              day
            )}
          />
        ))}
        <EventModalContainer />
      </div>
    );
  }
);

export default memo(Body);