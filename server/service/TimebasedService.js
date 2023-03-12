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
    const timebased = await Timebased.upsert(
      { ...data },
      { where: { EventId: eventId } }
    );

    return timebased[0].dataValues;
  }

  async delete(eventId) {
    const timebased = await Timebased.destroy({ where: { EventId: eventId } });

    return eventId;
  }
}

module.exports = new TimebasedService();
