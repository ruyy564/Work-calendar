const Router = require('express');
const EventController = require('../controllers/EventController');
const authMiddleware = require('../middleware/AuthMiddleware');

const router = new Router();

router.post('/getevents', EventController.getEvents);
router.post('/create', EventController.createEvent);
router.post('/piecework', EventController.addPiecework);
router.put('/piecework', EventController.updatePiecework);
router.put('/timebased', EventController.updateTimebased);
router.delete('/piecework', EventController.deletePiecework);
router.delete('/timebased', EventController.deleteTimebased);

module.exports = router;
