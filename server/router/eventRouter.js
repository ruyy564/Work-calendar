const Router = require('express');
const EventController = require('../controllers/EventController');
const authMiddleware = require('../middleware/AuthMiddleware');

const router = new Router();

router.post('/getevents', authMiddleware, EventController.getEvents);
router.post('/event', authMiddleware, EventController.createEvent);
router.post('/piecework', authMiddleware, EventController.addPiecework);
router.put('/piecework', authMiddleware, EventController.updatePiecework);
router.put('/timebased', authMiddleware, EventController.updateTimebased);
router.delete('/piecework', authMiddleware, EventController.deletePiecework);
router.delete('/timebased', authMiddleware, EventController.deleteTimebased);

module.exports = router;
