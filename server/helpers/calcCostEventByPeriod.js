const spliteDate = require('./spliteDate');

const getCostTimeBasedWork = (timebased) => {
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

const getCostPlacework = (pieceworks) =>
  pieceworks.reduce((acc, piecework) => {
    return acc + getPieceworkCost(piecework) * getPieceworkCount(piecework);
  }, 0);

const calcCostEventByPeriod = (events, start, end) =>
  events.reduce((acc, event) => {
    const date = spliteDate(event.date);
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
      const pieceWork = event.pieceWork;
      const timebased = event.timebased;

      if (pieceWork?.length) {
        return acc + getCostPlacework(pieceWork);
      }

      if (timebased) {
        return acc + getCostTimeBasedWork(timebased);
      }
    }

    return acc;
  }, 0);

module.exports = calcCostEventByPeriod;
