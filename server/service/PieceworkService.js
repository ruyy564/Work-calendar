const { Piecework } = require('../models');
const PieceworkDto = require('../dtos/PieceworkDto');

class PieceworkService {
  async getPieceworks(eventId) {
    const findPieceworks = await Piecework.findAll({
      where: { EventId: eventId },
    });
    const pieceworks = findPieceworks.map((item) => new PieceworkDto(item));

    return pieceworks;
  }

  async create(eventId, data) {
    const newPiecework = await Piecework.create({
      ...data,
      EventId: eventId,
    });

    return new PieceworkDto(newPiecework);
  }

  async update(data) {
    const piecework = await Piecework.upsert({ ...data });
    
    return new PieceworkDto(piecework[0]);
  }

  async delete(pieceworkId) {
    return await Piecework.destroy({
      where: { id: pieceworkId },
    });
  }
}

module.exports = new PieceworkService();
