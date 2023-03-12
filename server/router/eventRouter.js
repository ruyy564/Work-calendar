const Router = require('express');
const EventController = require('../controllers/EventController');
const authMiddleware = require('../middleware/AuthMiddleware');

const router = new Router();

router.post('/getevents', EventController.getEvents);
router.post('/create', authMiddleware, EventController.createEvent);
router.post('/addpiecework', authMiddleware, EventController.addPiecework);
router.post(
  '/updatepiecework',
  authMiddleware,
  EventController.updatePiecework
);
router.post(
  '/updatetimebased',
  authMiddleware,
  EventController.updateTimebased
);

module.exports = router;
