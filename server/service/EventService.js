const { Op } = require('sequelize');
const TimebasedService = require('./TimebasedService');
const PieceworkService = require('./PieceworkService');
const { Event } = require('../models');
const EventDto = require('../dtos/EventDto');
const calcCostEventByPeriod = require('../helpers/calcCostEventByPeriod');

class EventService {
  async getEvent(eventId) {
    const findEvent = await Event.findOne({
      where: { id: eventId },
    });

    return findEvent ? new EventDto(findEvent) : null;
  }
  async getEvents(userId, start = '2000-01-01', end = '2100-01-01') {
    const findEvents = await Event.findAll({
      where: { UserId: userId, date: { [Op.between]: [start, end] } },
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

  async getEventsCostByPeriod(
    userId,
    start = '2000-01-01',
    end = '2100-01-01'
  ) {
    const events = await this.getEvents(userId, start, end);
    const cost = calcCostEventByPeriod(events, start, end);

    return cost;
  }

  async create(userId, date, timebased, piecework) {
    const newEvent = await Event.create({ date, UserId: userId });
    const event = new EventDto(newEvent);
    let newTimebased = null;
    let newPiecework = [];

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
