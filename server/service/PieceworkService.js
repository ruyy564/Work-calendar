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

  async update(data) {
    const piecework = await Piecework.upsert(
      { ...data },
      { where: { PieceworkId: data.id } }
    );

    return piecework[0].dataValues;
  }

  async delete(pieceworkId) {
    const piecework = await Piecework.destroy({
      where: { PieceworkId: pieceworkId },
    });

    return pieceworkId;
  }
}

module.exports = new PieceworkService();
