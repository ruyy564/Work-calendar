import { Event } from '../entities/Event';

export type KeyEvents = {
  [key: string]: Event;
};

const getKeysEvent = (event: Event[]) => {
  const result: KeyEvents = {};

  event.forEach((item) => {
    result[item.date] = item;
  });

  return result;
};

export default getKeysEvent;
