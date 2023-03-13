import { Event, Piecework, Timebased } from '.';

export const getEventTimebased = (event: Event) => {
  return event.timebased;
};

export const getEventPieceworks = (event: Event) => {
  return event.pieceworks;
};

export const getEventDate = (event: Event) => {
  return event.date;
};

export const getEventId = (event: Event) => {
  return event.id;
};

export const getTimebasedEventId = (timebased: Timebased) => {
  return timebased.EventId;
};

export const getTimebasedCostInHour = (timebased: Timebased) => {
  return timebased.costInHour;
};

export const getTimebasedFirstTwoHourRatio = (timebased: Timebased) => {
  return timebased.firstTwoHourRatio;
};

export const getTimebasedMainWorkTime = (timebased: Timebased) => {
  return timebased.mainWorkTime;
};

export const getTimebasedOtherHoursRatio = (timebased: Timebased) => {
  return timebased.otherHoursRatio;
};

export const getTimebasedOverTime = (timebased: Timebased) => {
  return timebased.overTime;
};

export const getPieceworkId = (piecework: Piecework) => {
  return piecework.id;
};

export const getPieceworkCost = (piecework: Piecework) => {
  return piecework.cost;
};

export const getPieceworkEventId = (piecework: Piecework) => {
  return piecework.EventId;
};

export const getPieceworkCount = (piecework: Piecework) => {
  return piecework.count;
};

export const getPieceworkName = (piecework: Piecework) => {
  return piecework.name;
};
