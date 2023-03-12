const { validationResult } = require('express-validator');
const EventService = require('../service/EventService');
const TimebasedService = require('../service/TimebasedService');
const PieceworkService = require('../service/PieceworkService');
const ApiError = require('../error/ApiError');
const { Event } = require('../models');

class EventController {
  async getEvents(req, res, next) {
    try {
      const { userId } = req.body;
      const events = await EventService.getEvents(userId);

      return res.json(events);
    } catch (e) {
      next(e);
    }
  }

  async createEvent(req, res, next) {
    try {
      const { userId, date, timebased, piecework } = req.body;
      const event = await EventService.createEvent(
        userId,
        date,
        timebased,
        piecework
      );

      return res.json(event);
    } catch (e) {
      next(e);
    }
  }

  async updateTimebased(req, res, next) {
    try {
      const { userId, date, timebased } = req.body;
      const { dataValues } = await Event.findOne({
        where: { UserId: userId, date },
      });
      const newTimebased = await TimebasedService.update(
        dataValues.id,
        timebased
      );

      return res.json({ ...dataValues, timebased: newTimebased });
    } catch (e) {
      next(e);
    }
  }

  async updatePiecework(req, res, next) {
    try {
      const { userId, date, piecework } = req.body;
      const { dataValues } = await Event.findOne({
        where: { UserId: userId, date },
      });
      const newPiecework = await PieceworkService.update(piecework);

      return res.json({ ...dataValues, piecework: newPiecework });
    } catch (e) {
      next(e);
    }
  }

  async addPiecework(req, res, next) {
    try {
      const { userId, date, piecework } = req.body;
      const { dataValues } = await Event.findOne({
        where: { UserId: userId, date },
      });
      const newPiecework = await PieceworkService.create(
        dataValues.id,
        piecework
      );

      return res.json({ ...dataValues, piecework: newPiecework });
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new EventController();
