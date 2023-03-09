const { Op } = require('sequelize');

const { Piecework } = require('../models');

class PieceworkService {
  async create(eventId, data) {
    const piecework = await Piecework.create({
      ...data,
      EventId: eventId,
    });

    return piecework;
  }

  async update(pieceworkId, data) {
    const piecework = await Piecework.update(
      { ...data },
      { where: { id: pieceworkId } }
    );

    return piecework;
  }
}

module.exports = new PieceworkService();
