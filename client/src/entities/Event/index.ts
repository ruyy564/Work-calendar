import { STATUS } from '../../constants';

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

export type EventFetchData = {
  events: Event[];
  cost: number;
};

export type CreateEvent = {
  date: string;
  piecework?: NewPiecework;
  timebased?: NewTimebased;
};

export type ChangePiecework = {
  id: string;
  date: string;
  piecework: Piecework;
};

export type State = {
  events: Event[];
  status: STATUS | null;
  cost: number;
};

export type NewTimebased = {
  EventId?: string;
  costInHour: number;
  mainWorkTime: number;
  overTime: number;
  firstTwoHourRatio: number;
  otherHoursRatio: number;
};

export type NewPiecework = {
  id?: string;
  name: string;
  count: number;
  cost: number;
  EventId?: string;
};
export class EventWrapper {
  date: string;
  piecework?: NewPiecework;
  timebased?: NewTimebased;

  constructor(date: string) {
    this.date = date;
  }

  setPiework(piecework: NewPiecework) {
    this.piecework = piecework;
  }

  setTimebased(timebased: NewTimebased) {
    this.timebased = timebased;
  }
}

export class TimeBasedWrapper {
  EventId?: string;
  costInHour: number;
  mainWorkTime: number;
  overTime: number;
  firstTwoHourRatio: number;
  otherHoursRatio: number;

  constructor(
    costInHour: number,
    mainWorkTime: number,
    overTime: number,
    firstTwoHourRatio: number,
    otherHoursRatio: number,
    eventId?: string
  ) {
    this.costInHour = costInHour;
    this.mainWorkTime = mainWorkTime;
    this.overTime = overTime;
    this.firstTwoHourRatio = firstTwoHourRatio;
    this.EventId = eventId;
    this.otherHoursRatio = otherHoursRatio;
  }
}

export class PieceworkWrapper {
  id?: string;
  name: string;
  count: number;
  cost: number;
  EventId?: string;

  constructor(
    name: string,
    count: number,
    cost: number,
    eventId?: string,
    id?: string
  ) {
    this.name = name;
    this.count = count;
    this.cost = cost;
    this.EventId = eventId;
    this.id = id;
  }
}
