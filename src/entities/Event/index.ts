import { TYPE_WORK } from './constants';

export type PieceWork = {
  key: string;
  name: string;
  count: number;
  cost: number;
};

export type TimeBased = {
  costInHour: number;
  mainWorkTime: number;
  overTime: number;
  firstTwoHourRatio: number;
  otherHours: number;
};

export type typeTimeBased = {
  type: TYPE_WORK.TIME_BASED;
  data: TimeBased;
};
export type typePieceWork = {
  type: typeof TYPE_WORK.PIECE_WORK;
  data: PieceWork[];
};
export type Event = {
  date: string;
} & (typePieceWork | typeTimeBased);

export type EventPayload = Event & {
  date: string;
};

export type State = {
  events: Event[];
};
