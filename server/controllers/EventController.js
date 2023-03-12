const { validationResult } = require('express-validator');
const EventService = require('../service/EventService');
const TimebasedService = require('../service/TimebasedService');
const PieceworkService = require('../service/PieceworkService');

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
      const event = await EventService.create(
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
      const { eventId, timebased } = req.body;
      const event = await EventService.getEvent(eventId);
      const newTimebased = await TimebasedService.update(timebased);

      return res.json({ ...event, timebased: newTimebased });
    } catch (e) {
      next(e);
    }
  }

  async updatePiecework(req, res, next) {
    try {
      const { eventId, piecework } = req.body;
      const event = await EventService.getEvent(eventId);
      const newPiecework = await PieceworkService.update(piecework);

      return res.json({ ...event, piecework: newPiecework });
    } catch (e) {
      next(e);
    }
  }

  async addPiecework(req, res, next) {
    try {
      const { eventId, piecework } = req.body;
      const event = await EventService.getEvent(eventId);
      const newPiecework = await PieceworkService.create(eventId, piecework);

      return res.json({ ...event, piecework: newPiecework });
    } catch (e) {
      next(e);
    }
  }

  async deletePiecework(req, res, next) {
    try {
      const { eventId, pieceworkId } = req.body;

      const isDelete = await PieceworkService.delete(pieceworkId);
      const pieceworks = await PieceworkService.getPieceworks(eventId);

      if (pieceworks.length) {
        return res.json({ pieceworkId });
      }
      await EventService.delete(eventId);

      return res.json({ eventId, pieceworkId });
    } catch (e) {
      next(e);
    }
  }

  async deleteTimebased(req, res, next) {
    try {
      const { eventId } = req.body;

      await TimebasedService.delete(eventId);
      await EventService.delete(eventId);

      return res.json({ eventId });
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new EventController();
