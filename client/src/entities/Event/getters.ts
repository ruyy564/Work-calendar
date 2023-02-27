import { Event } from '.';
import { TYPE_WORK } from './constants';

export const getEventTimeBased = (event: Event) => {
  return event[TYPE_WORK.TIME_BASED];
};

export const getEventPiecesWork = (event: Event) => {
  return event[TYPE_WORK.PIECE_WORK];
};

export const getEventDate = (event: Event) => {
  return event.date;
};
