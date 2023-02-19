import { TYPE_WORK } from './constants';

export type PieceWork = {
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

export type State = {
  [key: string]: {
    type: TYPE_WORK;
    data: TimeBased | PieceWork;
  };
};
