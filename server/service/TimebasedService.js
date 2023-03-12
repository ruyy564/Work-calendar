const { Timebased } = require('../models');
const TimebasedDto = require('../dtos/TimebasedDto');

class TimebasedService {
  async getTimebased(eventId) {
    const findTimebased = await Timebased.findOne({
      where: { EventId: eventId },
    });

    return findTimebased ? new TimebasedDto(findTimebased) : null;
  }

  async create(eventId, data) {
    const newTimebased = await Timebased.create({
      ...data,
      EventId: eventId,
    });

    return new TimebasedDto(newTimebased);
  }

  async update(data) {
    const timebased = await Timebased.upsert({ ...data });

    return new TimebasedDto(timebased[0]);
  }

  async delete(eventId) {
    return await Timebased.destroy({ where: { EventId: eventId } });
  }
}

module.exports = new TimebasedService();
