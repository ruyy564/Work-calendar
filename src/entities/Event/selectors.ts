import type { RootState } from '../../store';
import { Event } from '.';
// import { getType, getData } from './getters';

export const selectEvent = (
  state: RootState,
  date: string
): Event | undefined => state.events.events.find((item) => item.date === date);

export const selectEventType = (state: RootState, date: string) =>
  selectEvent(state, date)?.type;

export const selectEventData = (state: RootState, date: string) =>
  selectEvent(state, date)?.data;
