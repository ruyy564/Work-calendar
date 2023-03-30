import { Event } from '../entities/Event';
import { getEventDate } from '../entities/Event/getters';

export type KeyEvents = {
  [key: string]: boolean;
};

const getKeysEvent = (event: Event[]) => {
  const result: KeyEvents = {};

  event.forEach((item) => {
    result[getEventDate(item)] = true;
  });

  return result;
};

export default getKeysEvent;
