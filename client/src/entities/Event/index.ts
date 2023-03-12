export type Piecework = {
  id: string;
  name: string;
  count: number;
  cost: number;
  EventId: string;
};

export type Timebased = {
  EventId: string;
  costInHour: number;
  mainWorkTime: number;
  overTime: number;
  firstTwoHourRatio: number;
  otherHoursRatio: number;
};

export type Event = {
  id: string;
  date: string;
  timebased?: Timebased;
  pieceworks?: Piecework[];
};

export type CreateEvent = {
  date: string;
  piecework?: { name: string; count: number; cost: number; EventId: string };
  timebased?: Timebased;
};

export type AddPieceWorkToEvent = {
  id: string;
  date: string;
  piecework: Piecework;
};

export type State = {
  events: Event[];
};
