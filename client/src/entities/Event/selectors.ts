import type { RootState } from '../../store';
import { getEventPieceworks, getEventTimebased, getEventDate } from './getters';

export const selectEvents = (state: RootState) => state.eventsOfCalendar.events;

export const selectEvent = (state: RootState, date: string) =>
  state.eventsOfCalendar.events.find((item) => getEventDate(item) === date);

export const selectStatus = (state: RootState) => state.eventsOfCalendar.status;

export const selectEventPiecesworks = (state: RootState, date: string) => {
  const event = selectEvent(state, date);

  return event ? getEventPieceworks(event) : undefined;
};

export const selectEventTimebased = (state: RootState, date: string) => {
  const event = selectEvent(state, date);

  return event ? getEventTimebased(event) : undefined;
};
