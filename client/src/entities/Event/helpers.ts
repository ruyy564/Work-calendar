import { Timebased, Piecework } from '.';

export const getCostTimeBasedWork = (timebased: Timebased): number => {
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

export const getCostPlacework = (pieceworks: Piecework[]): number =>
  pieceworks.reduce((acc, piecework) => {
    return acc + piecework.cost * piecework.count;
  }, 0);
