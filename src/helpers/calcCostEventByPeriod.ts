import { Event } from '../entities/Event';
import {
  getEventPiecesWork,
  getEventTimeBased,
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
      startDate.day <= date.day &&
      startDate.month <= date.month &&
      startDate.year <= date.year;
    const isLessEnd =
      endDate.day >= date.day &&
      endDate.month >= date.month &&
      endDate.year >= date.year;

    if (isMoreStart && isLessEnd) {
      const pieceWork = getEventPiecesWork(event);
      const timebased = getEventTimeBased(event);

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
