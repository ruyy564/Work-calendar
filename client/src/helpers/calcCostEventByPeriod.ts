import { Event } from '../entities/Event';
import {
  getEventPieceworks,
  getEventTimebased,
  getEventDate,
} from '../entities/Event/getters';
import {
  getCostTimeBasedWork,
  getCostPlacework,
} from '../entities/Event/helpers';
import spliteDate from './spliteDate';

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
