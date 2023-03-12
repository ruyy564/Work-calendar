import type { RootState } from '../../store';
import { Event } from '.';
import { getEventPieceworks, getEventTimebased } from './getters';

export const selectEvents = (state: RootState) => state.eventsOfCalendar.events;

export const selectEvent = (
  state: RootState,
  date: string
): Event | undefined =>
  state.eventsOfCalendar.events.find((item) => item.date === date);

export const selectEventPiecesworks = (state: RootState, date: string) => {
  const event = selectEvent(state, date);

  return event ? getEventPieceworks(event) : undefined;
};

export const selectEventTimebased = (state: RootState, date: string) => {
  const event = selectEvent(state, date);
  console.log(event, event?.timebased);
  return event ? getEventTimebased(event) : undefined;
};
