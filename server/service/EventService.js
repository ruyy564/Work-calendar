const TimebasedService = require('./TimebasedService');
const PieceworkService = require('./PieceworkService');
const { Event } = require('../models');
const EventDto = require('../dtos/EventDto');

class EventService {
  async getEvent(eventId) {
    const findEvent = await Event.findOne({
      where: { id: eventId },
    });

    return findEvent ? new EventDto(findEvent) : null;
  }
  async getEvents(userId) {
    const findEvents = await Event.findAll({
      where: { UserId: userId },
    });
    const events = await Promise.all(
      findEvents.map(async (item) => {
        const event = new EventDto(item);
        const timebased = await TimebasedService.getTimebased(event.id);
        const pieceworks = await PieceworkService.getPieceworks(event.id);

        return {
          ...event,
          pieceworks,
          timebased,
        };
      })
    );

    return [...events];
  }

  async create(userId, date, timebased, piecework) {
    const newEvent = await Event.create({ date, UserId: userId });
    const event = new EventDto(newEvent);
    let newTimebased = null;
    let newPiecework = null;

    if (timebased) {
      newTimebased = await TimebasedService.create(event.id, timebased);
    }

    if (piecework) {
      newPiecework = [await PieceworkService.create(event.id, piecework)];
    }

    return {
      ...event,
      timebased: newTimebased,
      pieceworks: newPiecework,
    };
  }

  async delete(eventId) {
    return await Event.destroy({ where: { id: eventId } });
  }
}

module.exports = new EventService();
