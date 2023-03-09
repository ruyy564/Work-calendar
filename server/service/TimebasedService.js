const { Op } = require('sequelize');

const { Timebased } = require('../models');

class TimebasedService {
  async create(eventId, data) {
    const timebased = await Timebased.create({
      ...data,
      EventId: eventId,
    });

    return timebased;
  }

  async update(eventId, data) {
    const timebased = await Timebased.update(
      { ...data },
      { where: { EventId: eventId } }
    );

    return timebased;
  }
}

module.exports = new TimebasedService();
