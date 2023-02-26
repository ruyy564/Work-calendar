import { TimeBased, PieceWork } from '.';

export const getCostTimeBasedWork = (timeBasedWork: TimeBased): number => {
  const { costInHour, firstTwoHourRatio, mainWorkTime, otherHours, overTime } =
    timeBasedWork;
  const mainCost = costInHour * mainWorkTime;
  const firstTime = overTime > 2 ? 2 : overTime;
  const secondTime = overTime > 2 ? overTime - 2 : 0;
  const secondCost =
    costInHour * firstTime * firstTwoHourRatio +
    costInHour * secondTime * otherHours;

  return mainCost + secondCost;
};

export const getCostPlacework = (pieceworks: PieceWork[]): number =>
  pieceworks.reduce((acc, piecework) => {
    return acc + piecework.cost * piecework.count;
  }, 0);
