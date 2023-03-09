const { Op } = require('sequelize');
const TimebasedService = require('./TimebasedService');
const PieceworkService = require('./PieceworkService');
const { Event, Timebased, Piecework } = require('../models');

class EventService {
  async getEventByUserAndPeriod(userId, startDate, endDate) {
    const event = await Event.findOne({
      where: { UserId: userId, date: { [Op.between]: [startDate, endDate] } },
    });
    const timebased = await Timebased.findOne({ where: { EventId: event.id } });
    const piecework = await Piecework.findAll({ where: { EventId: event.id } });

    return {
      event,
      timebased,
      piecework,
    };
  }

  async createEvent(userId, date, timebased, piecework) {
    const event = await Event.create({ date, UserId: userId });

    if (timebased) {
      const newTimebased = await TimebasedService.create(event.id, timebased);

      return {
        event,
        timebased: newTimebased,
      };
    }

    if (piecework) {
      const newPiecework = await PieceworkService.create(event.id, piecework);

      return {
        event,
        piecework: newPiecework,
      };
    }
  }
}

module.exports = new EventService();
