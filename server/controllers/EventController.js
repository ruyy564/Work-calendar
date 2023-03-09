const { validationResult } = require('express-validator');
const EventService = require('../service/EventService');
const TimebasedService = require('../service/TimebasedService');
const PieceworkService = require('../service/PieceworkService');
const ApiError = require('../error/ApiError');

class EventController {
  async getEventByUserAndPeriod(req, res, next) {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return next(ApiError.badRequest('Некорректные данные'));
      }
      const { userId, startDate, endDate } = req.body;
      const eventData = await EventService.getEventByUserAndPeriod(
        userId,
        startDate,
        endDate
      );

      return res.json(eventData);
    } catch (e) {
      next(e);
    }
  }

  async createEvent(req, res, next) {
    try {
      const { userId, date, timebased, piecework } = req.body;
      const eventData = await EventService.createEvent(
        userId,
        date,
        timebased,
        piecework
      );

      return res.json(eventData);
    } catch (e) {
      next(e);
    }
  }

  async updateTimebased(req, res, next) {
    try {
      const { eventId, timebased } = req.body;
      const newTimebased = await TimebasedService.update(eventId, timebased);

      return res.json({
        timebased: newTimebased,
      });
    } catch (e) {
      next(e);
    }
  }

  async updatePiecework(req, res, next) {
    try {
      const { pieceworkId, piecework } = req.body;
      const newPiecework = await PieceworkService.update(
        pieceworkId,
        piecework
      );

      return res.json({
        piecework: newPiecework,
      });
    } catch (e) {
      next(e);
    }
  }

  async addPiecework(req, res, next) {
    try {
      const { eventId, piecework } = req.body;
      const newPiecework = await TimebasedService.create(eventId, piecework);

      return res.json({ piecework: newPiecework });
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new EventController();
