const TimebasedService = require('./TimebasedService');
const PieceworkService = require('./PieceworkService');
const { Event, Timebased, Piecework } = require('../models');

class EventService {
  async getEvents(userId) {
    const eventsData = await Event.findAll({
      where: { UserId: userId },
    });
    const events = await Promise.all(
      eventsData.map(async (event) => {
        const timebased = await Timebased.findOne({
          where: { EventId: event.id },
        });

        if (!timebased) {
          const pieceworks = await Piecework.findAll({
            where: { EventId: event.id },
          });

          return {
            ...event.dataValues,
            pieceworks,
          };
        }

        return {
          ...event.dataValues,
          timebased,
        };
      })
    );

    return [...events];
  }

  async createEvent(userId, date, timebased, piecework) {
    const event = await Event.create({ date, UserId: userId });

    if (timebased) {
      const newTimebased = await TimebasedService.create(event.id, timebased);

      return {
        ...event.dataValues,
        timebased: newTimebased,
      };
    }

    if (piecework) {
      const newPiecework = await PieceworkService.create(event.id, piecework);

      return {
        ...event.dataValues,
        pieceworks: [newPiecework],
      };
    }
  }

  async deleteEvent(eventId, pieceworkId) {
    if (pieceworkId) {
      await PieceworkService.delete(pieceworkId);
    }
    const hasEvent = await Event.findOne({
      where: { EventId: eventId },
    });

    if (hasEvent) {
      await Event.destroy({ where: { EventId: eventId } });
    }
    return { eventId, pieceworkId };
  }
}

module.exports = new EventService();
