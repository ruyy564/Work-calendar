import { Timebased, Piecework, Event } from '.';
import { getEventPieceworks, getEventTimebased, getEventDate } from './getters';
import spliteDate from '../../helpers/spliteDate';

const getCostTimeBasedWork = (timebased: Timebased): number => {
  const {
    costInHour,
    firstTwoHourRatio,
    mainWorkTime,
    otherHoursRatio,
    overTime,
  } = timebased;
  const mainCost = costInHour * mainWorkTime;
  const firstTime = overTime > 2 ? 2 : overTime;
  const secondTime = overTime > 2 ? overTime - 2 : 0;
  const secondCost =
    costInHour * firstTime * firstTwoHourRatio +
    costInHour * secondTime * otherHoursRatio;

  return mainCost + secondCost;
};

const getCostPlacework = (pieceworks: Piecework[]): number =>
  pieceworks.reduce((acc, piecework) => {
    return acc + piecework.cost * piecework.count;
  }, 0);

const calcCostEventByPeriod = (events: Event[], start: string, end: string) =>
  events.reduce((acc, event) => {
    const date = spliteDate(getEventDate(event));
    const startDate = spliteDate(start);
    const endDate = spliteDate(end);
    const isMoreStart =
      Number(startDate.day) <= Number(date.day) &&
      Number(startDate.month) <= Number(date.month) &&
      Number(startDate.year) <= Number(date.year);
    const isLessEnd =
      Number(endDate.day) >= Number(date.day) &&
      Number(endDate.month) >= Number(date.month) &&
      Number(endDate.year) >= Number(date.year);

    if (isMoreStart && isLessEnd) {
      const pieceWork = getEventPieceworks(event);
      const timebased = getEventTimebased(event);

      if (pieceWork) {
        return acc + getCostPlacework(pieceWork);
      }

      if (timebased) {
        return acc + getCostTimeBasedWork(timebased);
      }
    }

    return acc;
  }, 0);

export default calcCostEventByPeriod;
