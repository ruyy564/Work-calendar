import type { RootState } from '../../store';
import { Event } from '.';
import { getEventPiecesWork, getEventTimeBased } from './getters';

export const selectEvents = (state: RootState) => state.eventsOfCalendar.events;

export const selectEvent = (
  state: RootState,
  date: string
): Event | undefined =>
  state.eventsOfCalendar.events.find((item) => item.date === date);

export const selectEventPiecesWork = (state: RootState, date: string) => {
  const event = selectEvent(state, date);

  return event ? getEventPiecesWork(event) : undefined;
};

export const selectEventTimeBased = (state: RootState, date: string) => {
  const event = selectEvent(state, date);

  return event ? getEventTimeBased(event) : undefined;
};
