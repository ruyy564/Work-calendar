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

export type Event = {
  date: string;
  [TYPE_WORK.TIME_BASED]?: TimeBased;
  [TYPE_WORK.PIECE_WORK]?: PieceWork[];
};

export type State = {
  events: Event[];
};
