import { Event, Timebased } from '.';

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
